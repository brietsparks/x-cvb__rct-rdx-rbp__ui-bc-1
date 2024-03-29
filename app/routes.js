// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};


export default function createRootComponent(store) {
  const { injectReducer } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  return {
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/App'),

        // System.import('containers/NavigationContainer'),
        // System.import('containers/NavigationContainer/reducer'),

        System.import('containers/AuthContainer/reducer'),
        System.import('containers/AuthContainer'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([
        app,

        authReducer,
        authContainer
      ]) => {
        injectReducer('authContainer', authReducer.default);
        renderRoute(app);
      });

      importModules.catch(errorLoading);
    },
    childRoutes: createRoutes(store),
  }
}

function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/builder',
      name: 'builderContainer',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ExpsContainer/reducer'),
          System.import('containers/ExpsContainer'),

          System.import('containers/BuilderContainer/reducer'),
          System.import('containers/BuilderContainer'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([
          expsReducer, expsComponent,
          builderReducer, builderComponent,
        ]) => {
          injectReducer('expsContainer', expsReducer.default);
          renderRoute(expsComponent);

          injectReducer('builderContainer', builderReducer.default);
          renderRoute(builderComponent);

        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
          System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}

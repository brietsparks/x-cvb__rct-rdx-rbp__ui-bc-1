import 'lodash';

const root = 'http://localhost:3000';

const endpoints = {
  login: '/login'
};

_.each(endpoints, (val, key) => {
  endpoints[key] = root + val;
});

endpoints.root = root;

export const Api = endpoints;
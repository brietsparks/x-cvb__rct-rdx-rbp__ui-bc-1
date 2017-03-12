import 'lodash';

const root = 'http://localhost:8000';

const endpoints = {
  login: '/auth/login',
  register: '/auth/register'
};

_.each(endpoints, (val, key) => {
  endpoints[key] = root + val;
});

endpoints.root = root;

export const Api = endpoints;
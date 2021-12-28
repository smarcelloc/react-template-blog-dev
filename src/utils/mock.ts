import AxiosMockAdapter from 'axios-mock-adapter';

import request from './request';

const mock = new AxiosMockAdapter(request, {
  delayResponse: 0,
});

export default mock;

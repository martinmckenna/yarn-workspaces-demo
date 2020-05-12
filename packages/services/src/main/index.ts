import { AxiosPromise } from 'axios';
import { request } from 'src/request';

export const getCatFacts = (): AxiosPromise<{}> => {
  return request({
    method: 'GET',
    url: '/facts'
  });
};

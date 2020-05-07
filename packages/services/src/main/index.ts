import { AxiosPromise } from 'axios';
import { request } from 'src/request';

export const getCatFacts = (): AxiosPromise<{}> => {
  console.log('fdsf')
  return request({
    method: 'GET',
    url: '/facts'
  });
};

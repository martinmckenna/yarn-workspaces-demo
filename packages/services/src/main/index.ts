import { AxiosPromise } from 'axios';
import { request } from 'src/request';

export const getCatFacts = (): AxiosPromise<{}> => {
  console.log('hello dfsfdworld')
  return request({
    method: 'GET',
    url: '/facts'
  });
};

import Axios from 'axios';

export const request = Axios.create({
  baseURL: 'https://cat-fact.herokuapp.com'
});

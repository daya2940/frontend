import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const signup =(user) => {
  return fetch(`${API}/signup`,{
    method: 'POST',
    headers: {
      Accept: 'application/json','content-type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
  });
};

export const signin =(user) => {
  return fetch(`${API}/signin`,{
    method: 'POST',
    headers: {
      Accept: 'application/json','content-type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
  });
};

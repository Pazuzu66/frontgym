import axios from 'axios';

/**
 * AXIOS CONFIGURATION TO HELP WRITE LESS CODE
 * I ALSO DESIDE TO USE THE POSTS DATA, BECAUSE FIND IT MORE FUNNY
 */

export const todoApi = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/todos',
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=UTF-8',
  },
});
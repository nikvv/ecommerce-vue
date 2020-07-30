import axios from 'axios'

const instance = axios.create({
      baseURL: 'https://enigmatic-mesa-13390.herokuapp.com', //https://enigmatic-mesa-13390.herokuapp.com/
      timeout: 10000,
      headers: {'X-Custom-Header': 'foobar'}
    });

export default instance;
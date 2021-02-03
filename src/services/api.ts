import axios from 'axios';

const devURL = 'http://192.168.0.10:8080/api';
const prodURL = 'https://cidadao-server.herokuapp.com/api';

export default axios.create({
  baseURL: prodURL,
});

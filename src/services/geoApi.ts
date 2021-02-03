import axios from 'axios';

export default axios.create({
  baseURL: 'http://open.mapquestapi.com/geocoding/v1',
});

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: '98a1b0139d9a221997f5d8f1b8e57824' },
});

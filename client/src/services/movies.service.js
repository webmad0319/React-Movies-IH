import axios from 'axios';

export default class MoviesService{
  constructor(){
    this.service = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    });
  }

  getAll(){
    return this.service.get('/all')
      .then(res => res.data)
      .catch(err => console.error(err));
  }
}
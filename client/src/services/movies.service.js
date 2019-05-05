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

  getById(id){
    return this.service.get('/one/'+id)
      .then(res => res.data)
      .catch(err => console.error(err));
  }

  delete(id){
    return this.service.delete('/delete/'+id)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
  update(id, state){
    return this.service.put('/update/'+id, state)
      .then(res => res.data)
      .catch(err => console.error(err));
  }

  add(data){
    return this.service.post('/new', data)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
}
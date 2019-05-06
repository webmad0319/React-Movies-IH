import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL:`http://localhost:5000/`,
      withCredentials: true
    })
    
  }

  getAllMovies = () => {
    return this.service.get('all')
    .then((response) => {
      return response.data
    })
  }

  getOneMovie = (id) => {
    return this.service.get(`one/${id}`)
    .then((response) => {
      return response.data
    })
  }

  addNewMovie = (body) => {
    return this.service.post(`new`, body)
    .then((response) => {
      return response.data
    })
  }
  

}

export default AuthService;
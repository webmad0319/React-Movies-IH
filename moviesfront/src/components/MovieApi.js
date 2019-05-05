import axios from "axios";


export default class MovieApi{
  constructor() {
    this.service = axios
    .create({
      baseURL:`http://localhost:5000`,
      withCredentials: true
    })
  }

  allMovies() {
      return this.service 
        .get('/all')
        .then(response => {console.log(response, "hola")
        return response.data})
        .catch(err => console.log(err))
    }

  oneMovie() {
      return this.service 
         .get(`/one/${this.props.match.params.id}`)
         .then(response => {console.log(response, "hola")
         return response.data})
         .catch(err => console.log(err))
         }
    
}


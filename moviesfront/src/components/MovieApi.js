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

  oneMovie(id) {
      return this.service 
         .get(`/one/${id}`)
         .then(response => {console.log(response, "hola")
         return response.data})
         .catch(err => console.log(err))
         }


  newMovie(title, director, rate, image_url, year, duration) {
    return this.service
    .post('/new',{title, director, rate, image_url, year, duration} )  
  .catch( error => console.log(error) )
}

  editMovie(title, director, rate, image_url, year, duration, id) {
    console.log(title, "titulo")
    return this.service
    .put(`/edit/${id}`,{title, director, rate, image_url, year, duration} )
    .catch( error => console.log(error) )
}

deleteMovie(id) {
  return this.service
  .delete(`/delete/${id}`)
  .catch( error => console.log(error) )
}

}


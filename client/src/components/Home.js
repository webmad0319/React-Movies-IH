import React from 'react';
import { Link } from "react-router-dom";
import Services from "../tools/tools";

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.auxServices = new Services();
    }


    getInfo = () => {
        return this.auxServices.getAllMovies()
        .then(data => {
          this.setState({
              ...this.state,
              data
            })
        })
    }

    componentDidMount () {
        this.getInfo()
    }


  render() {
    return (
      <div>
        {
            this.state.data.map((movie, index) => {
            return (
            <div key={index}>
              <img src={movie.image_url} alt="Image picture"/>
              <Link to={`/one/${movie._id}`}><h1>{movie.title}</h1></Link> 
            </div>
            )
            })
        }
      </div>
    )
  }
}

export default Home;
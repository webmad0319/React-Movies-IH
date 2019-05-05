import React from 'react';
import Services from "../tools/tools";
import { Link } from "react-router-dom";

class oneMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.auxServices = new Services()
    }

    getMovieInfo = () => {
        return this.auxServices.getOneMovie(this.props.match.params.id)
        .then(data=>{
           this.setState({
              data: data
            })
        })
    }

    componentDidMount () {
        this.getMovieInfo()
    }


    render() {
        return (
        <div>
            <div>
              <img src={this.state.data.image_url} alt="Image film"/>
              <h2>{this.state.data.title}</h2>
              <p>{this.state.data.year}</p>
              <p>{this.state.data.director}</p>
              <p>{this.state.data.duration}</p>
              <p>{this.state.data.genre}</p>
              <p>{this.state.data.rate}</p>
              <p><Link to={`/delete/${this.state.data.id}`}>Delete Movie</Link></p>
              <p><Link to={`/update/${this.state.data.id}`}>Update Movie</Link></p>
            </div>
        </div>
    )
  }
}

export default oneMovie;
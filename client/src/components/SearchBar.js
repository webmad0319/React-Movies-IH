import React, { Component } from 'react'
import "./SearchBar.css"

export default class SearchBar extends Component {

  render() {
    return (
      <React.Fragment>
          <input className="search"
            type="text" 
            name="title"
            placeholder="Find a Movie"
            onChange={(e) => this.props.search(e.target.value)}/>
            <form>
              <label htmlFor="rate">Rate</label>
              <input type="radio" name="sort" value="rate" onClick={(e) => this.props.check(e.target.value)}/>
              <label htmlFor="duration">Duration</label>
              <input type="radio" name="sort" value="duration" onClick={(e) => this.props.check(e.target.value)}/>
              <label htmlFor="year">Year</label>
              <input type="radio" name="sort" value="year" onClick={(e) => this.props.check(e.target.value)}/>
            </form>
      </React.Fragment>
    )
  }
}
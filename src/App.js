import './App.css';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import { data } from "./data"

import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {

    const { store } = this.props;
    store.subscribe(() => {
      console.log("Update")
      this.forceUpdate();
    })

    store.dispatch({
      type: "ADD_MOVIES",
      movies: data
    });

    console.log("State", store.getState());
  }
  render() {

    const movies = this.props.store.getState();
console.log("Render")
    return (
      <div className="App">
        <NavBar />
        <div className='main'>
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}

          </div>
        </div>
      </div>
    )
  }
}


import './App.css';
import MovieCard from './components/MovieCard';
import NavBar from './components/NavBar';
import { data } from "./data"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='main'>
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {data.map(movie => (
            <MovieCard movie={movie} />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;

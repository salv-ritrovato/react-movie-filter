import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  // My array of movies
  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' }
  ];

  const [movie, setMovie] = useState("");

  return (
    <>
      <div className="container">
        <h1>MyMovieList <i className="bi bi-film"></i></h1>
        <div>
          <ol className='list-unstyled'>
            {movies.map(movie => (
              <li>TITOLO: {movie.title} GENERE: {movie.genre}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
};

export default App

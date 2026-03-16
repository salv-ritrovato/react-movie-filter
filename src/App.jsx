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

  const [genre, setGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (genre === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter(movie => movie.genre === genre))
    }
  }, [genre, movies]);

  return (
    <>
      <div className="container">
        <h1 className='mt-3'>MyMovieList <i className="bi bi-film"></i></h1>

        <select name="movies" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Seleziona un genere...</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <div>
          {/* Ordered list with dynamically printed movies */}
          <ol className='list-unstyled mt-3'>
            {/* Printing my array with map method */}
            {filteredMovies.map(movie => (
              <li key={movie.title}>TITOLO: {movie.title} | GENERE: {movie.genre}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
};

export default App

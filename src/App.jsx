import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  /* My array of movies */
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
        <h1 className='mt-3 mb-4'>MyMovieList <i className="bi bi-film"></i></h1>
        <select name="movies" value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="form-select mt-2 mb-3">
          <option value="">Seleziona un genere...</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>TITOLO</th>
              <th>GENERE</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map(movie => (
                <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default App

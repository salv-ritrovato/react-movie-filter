import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

/* My array of movies */
const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' }
];

function App() {
  const [genre, setGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [movietitle, setMovieTitle] = useState("");

  useEffect(() => {
    if (genre === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(movies.filter(movie => movie.genre === genre))
    }
  }, [genre, movies]);

  function handleSubmit(e) {
    e.preventDefault();
    const searchResults = movies.filter(movie =>
      movie.title.toLowerCase().includes(movietitle.toLowerCase()));
    setFilteredMovies(searchResults);
    setMovieTitle("");
  }

  return (
    <>
      <div className="container">
        <h1 className='mt-3 mb-4'>MyMovieList <i className="bi bi-film"></i></h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Inserisci titolo del film..."
            className="mb-3 mt-2"
            value={movietitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
          <button type="submit" className="mx-1">Cerca</button>
        </form>

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

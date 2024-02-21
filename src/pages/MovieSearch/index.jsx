import "./MovieSearch.css";
import { useMovies } from "../../hooks/useMovies";
import { Movies } from "../../components/Movies";
import { useEffect, useRef, useState } from "react";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("no se puede buscar una pelicula sin caracteres");
      return;
    }
    if (search.length < 3) {
      setError("la busqueda debe ser mayor de 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

const MovieSearch = () => {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({search});
  };

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch);
    
  };

  const handleSort =() => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <form className="form row" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Distintas pelis"
            className="w-100 col"
            onChange={handleChange}
            value={search}
            name="query"
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>cargando...</p> : <Movies movies={movies} />
        }
        
      </main>
    </div>
  );
};

export default MovieSearch;

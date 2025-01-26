import { useState } from "react"

function useMovies(){
    const [MoviesList, SetMoviesList] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
  
    const fetchMovies = async (MovieName) => {
      const Url = `https://api.themoviedb.org/3/search/movie?query=${MovieName}&include_adult=false&language=en-US&page=1&api_key=07ff533f5dfa9c2eb8c928c528199051`;
      const imgUrl = "https://image.tmdb.org/t/p/w500";
  
      try {
        const response = await fetch(Url);
        const data = await response.json();
  
        if (data.status_message) {
          setErrorMsg(data.status_message);
          SetMoviesList([]);
        } else {
          const movies = data.results.map((movie) => ({
            title: movie.title,
            img: imgUrl + movie.poster_path,
          }));
          SetMoviesList(movies);
        }
      } catch (err) {
        setErrorMsg("An error occurred while fetching data.");
        SetMoviesList([]);
        console.error(err);
      }
    };
  
    return { MoviesList, errorMsg, fetchMovies };
  };
  

// component for search form
function SearchForm ( { onSearch } ) {
    const [MovieName, setMovieName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(MovieName.trim()) {
            onSearch(MovieName);
        } else {
            alert("Please enter a movie name");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="search-genre" 
                placeholder="Enter a genre" value={MovieName}
                onChange={(e) => setMovieName(e.target.value)}
                />
            <button type="submit">Search</button>
            </form>
        </>
    )

}

function ShowMoviesList( { movies } ) {
    if (movies.length === 0){
        return null;
    } 
  return (
    <section id="similar-movies">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <h3>{movie.title}</h3>
          <img src={movie.img} alt={`Poster of ${movie.title}`} />
        </div>
      ))}
    </section>
  );
};

export default function MovieSearch() {
    const { MoviesList, errorMsg, fetchMovies } = useMovies();


    return (
        <>
            <SearchForm onSearch={fetchMovies} />
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <ShowMoviesList movies={MoviesList} />
        </>
    )
}


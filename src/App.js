import './App.css';
import { useEffect, useRef, useState } from 'react';
import MovieService from './services/MovieService';
import MovieCard from './components/MovieCard';
function App() {
  const [movies,setMovies] = useState([])
  let movieRef = useRef(false);

  useEffect(()=>{
    const getMovies = async (id) => {
      const res = await MovieService.getAllMovies();
      if (res.status === 200) {
        setMovies(res.data);
      }
    }
    if (!movieRef.current) {
      getMovies();
      movieRef.current = true;
  }
  },[])
  return (
    <div className="App">
        {
          movies.map((movie,index)=>{
            return <MovieCard movie={movie.Title} rating={movie.imdbRating} releasedDate={movie.Released} key={`movie_${index.toString()}`} /> 
          })
        }
    </div>
  );
}

export default App;

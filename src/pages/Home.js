import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
function Home() {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/movies")
      .then(resp => resp.json())
      .then(data =>setMovies(data))
  },[])
  const movieList = movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie}/>
  })
  console.log(movies)
  return (
    <>
      <header>
        {<NavBar/>}
        

      </header>
      <h1>Home Page</h1>
      <main>
        {movieList}
      </main>
    </>
  );
};

export default Home;

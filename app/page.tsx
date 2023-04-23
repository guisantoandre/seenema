import MovieList from "./components/MovieList";
import { MovieType } from "@/types/Movie";
import { getMovies } from "@/utils/getMovies";

export default async function Home() {
   const movies: MovieType[] = await getMovies();

   return <MovieList results={movies} />;
}

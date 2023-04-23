import { MovieType } from "@/types/Movie";

export default function filterMorePopularMovies(
   movies: MovieType[],
   filter: "asc" | "desc"
) {
   let newListMovies: MovieType[] = [];

   // Ordena os filmes com base na pontuação
   const morePopularMovies = movies.sort(
      (a, b) => b.vote_average - a.vote_average
   );

   // Adiciona os filmes ordenados na nova lista de filmes
   if (filter === "asc") {
      const lessPopularMovies = morePopularMovies.reverse();
      newListMovies = lessPopularMovies;
   } else if (filter === "desc") {
      newListMovies = morePopularMovies;
   }

   // Retorna a nova lista de filmes
   return newListMovies;
}

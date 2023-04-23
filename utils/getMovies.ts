export async function getMovies() {
   const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=pt-BR`,
      { next: { revalidate: 60 } }
   );

   if (!data.ok) return undefined;

   const res = await data.json();

   const result = res.results;

   return result;
}

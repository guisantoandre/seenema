export async function getOneMovie(id: string) {
   const movieDetailData = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=pt-BR`
   );

   if (!movieDetailData.ok) return undefined;

   const result = await movieDetailData.json();

   return result;
}

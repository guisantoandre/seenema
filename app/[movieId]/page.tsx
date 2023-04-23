import { MovieDetailType } from "@/types/MovieDetail";
import { getOneMovie } from "@/utils/getOneMovie";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import MovieInfo from "../components/MovieInfo";
import { getMovies } from "@/utils/getMovies";
import { MovieType } from "@/types/Movie";

type Props = {
   params: {
      movieId: string;
   };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const id = params.movieId;
   const result: MovieDetailType = await getOneMovie(id);

   if (!result) {
      return {
         title: "404 | Página não encontrada",
      };
   }

   return {
      title: "Seenema | " + result.title,
      description: "Informações detalhadas sobre o filme " + result.title,
   };
}

export default async function MovieDetail({ params }: Props) {
   const id = params.movieId;

   const result: MovieDetailType = await getOneMovie(id);

   if (!result) return notFound();

   return <MovieInfo key={result.id} info={result} />;
}

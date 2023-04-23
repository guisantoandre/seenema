"use client";

import { MovieType } from "@/types/Movie";
import styles from "./styles.module.css";
import { formatDate } from "@/utils/dateFormat";
import Link from "next/link";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { voteFormat } from "@/utils/voteFormat";
import { formatVoteToColor } from "@/utils/voteColorFormat";
import React from "react";
import filterMorePopularMovies from "@/utils/filterMovies";

type Props = {
   results: MovieType[];
};

const MovieList = ({ results }: Props) => {
   const [filteredMovies, setFilter] = React.useState("default");
   const [allMovies, setAllMovies] = React.useState([...results]);
   const imagePath = "https://image.tmdb.org/t/p/original";

   React.useEffect(() => {
      if (typeof window !== "undefined") {
         const item = localStorage.getItem("filter");
         if (item) setFilter(item);
      }
   }, []);

   React.useEffect(() => {
      localStorage.setItem("filter", filteredMovies);
   }, [filteredMovies]);

   React.useEffect(() => {
      switch (filteredMovies) {
         case "default":
            setAllMovies([...results]);
            break;
         case "morePopular":
            const descMovies = filterMorePopularMovies(allMovies, "desc");
            setAllMovies([...descMovies]);
            break;
         case "lessPopular":
            const ascMovies = filterMorePopularMovies(allMovies, "asc");
            setAllMovies([...ascMovies]);
            break;
      }
   }, [filteredMovies]);

   return (
      <>
         <div className={styles.filterWrapper}>
            <div className={styles.filterOptions}>
               <label htmlFor="type">Classificar:</label>
               <select
                  id="type"
                  value={filteredMovies}
                  onChange={(e) => setFilter(e.target.value)}
               >
                  <option value="default">Padrão</option>
                  <option value="morePopular">Mais popular</option>
                  <option value="lessPopular">Menos popular</option>
               </select>
            </div>
         </div>
         <div className={styles.moviesContainer}>
            {allMovies.map((movie) => (
               <Link key={movie.id} href={`/${movie.id}`}>
                  <div className={styles.card}>
                     <div className={styles.imageContainer}>
                        <Image
                           src={imagePath + movie.poster_path}
                           alt={movie.title}
                           fill
                           sizes="(max-width: 300px)"
                           priority={true}
                           quality={50}
                           className={styles.posterImg}
                        />

                        <div className={styles.rating}>
                           <CircularProgressbar
                              className={styles.percentageBar}
                              value={voteFormat.percentageBar(
                                 movie.vote_average
                              )}
                              text={`${voteFormat.voteNumber(
                                 movie.vote_average
                              )}`}
                              styles={buildStyles({
                                 textSize: "30px",
                                 trailColor: "#878891",
                                 textColor: `${formatVoteToColor(
                                    voteFormat.voteNumber(movie.vote_average)
                                 )}`,
                                 pathColor: `${formatVoteToColor(
                                    voteFormat.voteNumber(movie.vote_average)
                                 )}`,
                              })}
                           />
                        </div>
                     </div>
                     <h2 className={styles.title}>{movie.title}</h2>
                     <p className={styles.lancamento}>
                        {formatDate(movie.release_date)}
                     </p>
                  </div>
               </Link>
            ))}
         </div>
      </>
   );
};

export default MovieList;

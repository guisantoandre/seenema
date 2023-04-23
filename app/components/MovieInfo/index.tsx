"use client";

import styles from "./styles.module.css";
import { MovieDetailType } from "@/types/MovieDetail";
import { formatDate } from "@/utils/dateFormat";
import { convertToHours } from "@/utils/secondsFormat";
import Link from "next/link";
import Emoji from "../Emoji";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { voteFormat } from "@/utils/voteFormat";
import { formatVoteToColor } from "@/utils/voteColorFormat";
import Image from "next/image";

type Props = {
   info: MovieDetailType;
};

const MovieInfo = ({ info }: Props) => {
   const imagePath = "https://image.tmdb.org/t/p/original";

   const genresNames = info.genres.map((genre) => genre.name);
   const formattedGenres = genresNames.join(", ");

   const content = (
      <div className={styles.detailContainer}>
         <div className={styles.infoImg}>
            <Image
               src={imagePath + info.backdrop_path}
               alt={info.title}
               fill
               priority={true}
               quality={50}
            />
         </div>

         <div className={styles.infoTextWrapper}>
            <div className={styles.infoText}>
               <h2 className={styles.title}>{info.title}</h2>
               <div className={styles.details}>
                  <div className={styles.detail}>
                     <Emoji symbol="📅" label="date" />
                     <span>{formatDate(info.release_date)}</span>
                  </div>

                  <div className={styles.detail}>
                     <Emoji symbol="🕑" label="time" />
                     <span>{convertToHours(info.runtime)}</span>
                  </div>
                  <div className={styles.detail}>
                     <Emoji symbol="📽️" label="time" />
                     <span>{formattedGenres}</span>
                  </div>
                  <div className={styles.rating}>
                     <CircularProgressbar
                        value={voteFormat.percentageBar(info.vote_average)}
                        text={`${voteFormat.voteNumber(info.vote_average)}`}
                        styles={buildStyles({
                           textSize: "25px",
                           trailColor: "#878891",
                           textColor: `${formatVoteToColor(
                              voteFormat.voteNumber(info.vote_average)
                           )}`,
                           pathColor: `${formatVoteToColor(
                              voteFormat.voteNumber(info.vote_average)
                           )}`,
                        })}
                     />
                  </div>
               </div>

               <div className={styles.description}>
                  <h2>Sinopse:</h2>
                  {info.overview ? (
                     <p className={styles.text}>{info.overview}</p>
                  ) : (
                     <p className={styles.text}>Filme sem descrição.</p>
                  )}
               </div>
            </div>
            <Link href={"/"} className="defaultBtn">
               Voltar
            </Link>
         </div>
      </div>
   );

   return content;
};

export default MovieInfo;

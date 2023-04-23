import Link from "next/link";
import styles from "./styles.module.css";

export default function NotFound() {
   return (
      <div className={styles.notFoundWrapper}>
         <h2 className={`${styles.title} ${styles.titleNotFound}`}>
            404 | Página não encontrada! {""}
            <span role="img" aria-label="sheep" className={styles.emoji}>
               🔍
            </span>
         </h2>
         <p className={styles.text}>Verifique a URL e tente novamente.</p>
         <Link href="/" className="defaultBtn">
            Voltar{" "}
            <span role="img" aria-label="sheep" className={styles.emoji}>
               🏠
            </span>
         </Link>
      </div>
   );
}

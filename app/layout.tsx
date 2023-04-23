import Link from "next/link";
import "./globals.css";

import { Inter } from "next/font/google";
import Emoji from "./components/Emoji";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
   weight: ["400", "600"],
});

export const metadata = {
   title: "Seenema",
   description: "Os filmes mais populares no cinema",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-BR" className={`${inter.variable}`}>
         <body>
            <div className="container">
               <nav>
                  <Link href="/">
                     <h1 className="logo">
                        Seenema
                        <Emoji symbol="🎬" label="claquete" />
                     </h1>
                  </Link>
               </nav>
               {children}
            </div>
         </body>
      </html>
   );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import myStyles from "@/styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Редактор Steam Разметки</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/steam.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${myStyles.buttons}`}>
        <button data-tag="h1">H1<span className="tooltip">Ctrl + Shift + H</span></button>
            <button data-tag="h2">H2</button>
            <button data-tag="h3">H3</button>
            <button data-tag="b">B<span className="tooltip">Ctrl + B</span></button>
            <button data-tag="u">U<span className="tooltip">Ctrl + U</span></button>
            <button data-tag="i">I<span className="tooltip">Ctrl + I</span></button>
            <button data-tag="strike">Strike<span className="tooltip">Ctrl + Shift + X</span></button>
            <button data-tag="spoiler">Spoiler</button>
            <button data-tag="url">URL<span className="tooltip">Ctrl + K</span></button>
            <button data-tag="noparse">Noparse</button>
            <button data-tag="hr">HR</button>
            <button data-tag="code">Code</button>
            <button data-tag="quote">Quote</button>
        </div>
        <textarea id="editor"></textarea>
        <div id="preview"></div>
      </main>
    </>
  );
}

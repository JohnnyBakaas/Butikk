import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Alle biler</h1>
      </div>
      <div className={styles.card}>
        <h1>Finn den perfekte bilen</h1>
      </div>
    </main>
  );
}

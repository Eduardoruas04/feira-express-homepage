import Head from "next/head";
import styles from "~/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Feira Express</title>
        <meta name="description" content="Encontre produtos na feira perto de você" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.logo}>Feira Express</h1>
        <button className={styles.loginBtn}>Login</button>
      </header>

      <main className={styles.main}>
        <div className={styles.background}></div>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h2 className={styles.title}>ENCONTRE PRODUTOS NA FEIRA PERTO DE VOCÊ</h2>
          <p className={styles.subtitle}>COMECE COLOCANDO SUA LOCALIZAÇÃO</p>
          <input type="text" placeholder="Localização" className={styles.input} />
        </div>
      </main>
    </>
  );
}

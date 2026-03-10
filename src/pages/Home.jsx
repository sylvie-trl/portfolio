import styles from "./Home.module.css";

function Home() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.label}>Portfolio</p>

        <h1 className={styles.title}>Sylvie Trollé</h1>

        <p className={styles.subtitle}>
          Développement web, produit et UX au service de projets numériques
          utiles
        </p>

        <p className={styles.description}>
          Formée au développement web, j’associe compréhension technique, sens
          du produit et organisation de projet.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            Voir mes projets
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

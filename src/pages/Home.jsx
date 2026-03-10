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
          Formée au développement web, j’évolue à l’interface entre technique,
          conception et organisation de projet, avec une attention particulière
          portée aux usages et à la clarté des interfaces.
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

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.content}>
        <a className={styles.logo} href="#home">
          Sylvie Trollé
        </a>

        <div className={styles.links}>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

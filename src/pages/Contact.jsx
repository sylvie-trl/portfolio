import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.label}>Contact</p>

        <h2 className={styles.title}>Échangeons autour de vos projets</h2>

        <div className={styles.links}>
          <a
            href="mailto:sylvie.trl22@gmail.com"
            className={styles.primaryLink}
          >
            M’écrire par email
          </a>

          <a
            href="https://github.com/sylvie-trl/"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryLink}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sylvie-trl"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryLink}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

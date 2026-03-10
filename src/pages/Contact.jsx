import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.label} aria-hidden="true">
          Contact
        </p>

        <h2 className={styles.title}>Échangeons autour de vos projets</h2>

        <ul className={styles.links}>
          <li>
            <a
              href="mailto:sylvie.trl22@gmail.com"
              className={styles.primaryLink}
            >
              M’écrire par email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sylvie-trl/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sylvie-trl"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;

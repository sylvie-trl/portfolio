import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Sylvie Trollé - Tous droits réservés
        </p>

        <div className={styles.links}>
          <a
            href="https://github.com/sylvie-trl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                fill="currentColor"
                d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.01 3.24 9.25 7.74 10.75.56.1.76-.24.76-.53v-2.02c-3.15.69-3.81-1.52-3.81-1.52-.51-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.66 1.94 2.62 1.38.1-.72.39-1.21.71-1.49-2.51-.29-5.15-1.25-5.15-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 2.83-.38c.96 0 1.92.13 2.83.38 2.16-1.46 3.11-1.16 3.11-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.03 0 4.32-2.65 5.26-5.17 5.54.4.34.76 1.01.76 2.05v3.04c0 .29.2.64.77.53 4.49-1.5 7.73-5.74 7.73-10.75C23.25 5.48 18.27.5 12 .5z"
              />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/sylvie-trl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

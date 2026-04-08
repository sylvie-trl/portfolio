import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.label} aria-hidden="true">
          Contact
        </p>

        <h2 className={styles.title}>Échangeons autour de vos projets</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Envoyer le message
          </button>

          {isSubmitted && (
            <p className={styles.successMessage}>
              Merci ! Votre message a bien été envoyé.
            </p>
          )}
        </form>

        <ul className={styles.links}>
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

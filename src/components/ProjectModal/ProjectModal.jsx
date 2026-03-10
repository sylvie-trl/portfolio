import { useEffect } from "react";
import styles from "./ProjectModal.module.css";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label="Fermer">
          ×
        </button>
        <div className={styles.header}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />

          <div className={styles.headerContent}>
            <h3 id="project-title" className={styles.title}>
              {project.title}
            </h3>

            <p className={styles.description}>{project.description}</p>

            <ul className={styles.stack}>
              {project.stack.map((tech) => (
                <li key={tech} className={styles.tag}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h4>Contexte </h4>
          <p>{project.context}</p>
        </div>

        <div className={styles.section}>
          <h4>Objectifs</h4>
          <ul>
            {project.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Résultats</h4>
          <ul>
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Perspectives d’amélioration</h4>
          <ul>
            {project.improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Voir le code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Voir la démo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

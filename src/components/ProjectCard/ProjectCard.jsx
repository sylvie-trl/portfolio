import styles from "./ProjectCard.module.css";

function ProjectCard({ project, onClick }) {
  return (
    <article className={styles.card}>
      <button
        className={styles.cardButton}
        onClick={onClick}
        aria-label={`Ouvrir le projet ${project.title}`}
      >
        <img src={project.image} alt={project.alt} className={styles.image} />

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>

          <p className={styles.description}>{project.shortDescription}</p>

          <ul className={styles.stack}>
            {project.stack.map((tech) => (
              <li key={tech} className={styles.tag}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </article>
  );
}

export default ProjectCard;

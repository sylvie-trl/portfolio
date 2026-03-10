import styles from "./ProjectCard.module.css";

function ProjectCard({ project, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={project.image} alt={project.title} className={styles.image} />

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.description}>{project.shortDescription}</p>

        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

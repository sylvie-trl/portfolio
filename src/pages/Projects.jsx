import { useState } from "react";
import styles from "./Projects.module.css";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectModal from "../components/ProjectModal/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <p className={styles.label} aria-hidden="true">
          Projets
        </p>
        <h2 className={styles.title}>Projets séléctionnés</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;

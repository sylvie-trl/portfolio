import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.label}>À propos</p>

        <h2 className={styles.title}>
          Un profil à l'interface entre technique, produit et UX
        </h2>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Après plusieurs années dans le domaine de la santé et des projets
              numériques, j’ai souhaité approfondir ma compréhension technique
              des applications en me formant au développement web avec
              OpenClassrooms.
            </p>

            <p>
              En parallèle, j’ai occupé un rôle de Scrum Master sur des projets
              numériques en santé à l’Institut Gustave Roussy, où j’accompagne
              les équipes dans l’organisation et le suivi des développements.
            </p>

            <p>
              Aujourd’hui, je combine compréhension technique, organisation de
              projet et sensibilité design. J’interviens aussi dans la
              conception d’interfaces et la réalisation de maquettes avec Figma,
              afin de faciliter la collaboration entre produit, design et
              développement.
            </p>
          </div>
        </div>

        <div className={styles.skills}>
          <div className={styles.skillBlock}>
            <h3>Développement</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>HTML / CSS</li>
            </ul>
          </div>

          <div className={styles.skillBlock}>
            <h3>Design / UX</h3>
            <ul>
              <li>Figma</li>
              <li>Maquettes d’interface</li>
              <li>Responsive design</li>
              <li>Accessibilité web</li>
            </ul>
          </div>

          <div className={styles.skillBlock}>
            <h3>Produit / Organisation</h3>
            <ul>
              <li>Agile / Scrum</li>
              <li>User stories</li>
              <li>Coordination projet</li>
              <li>Travail avec équipes pluridisciplinaires</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

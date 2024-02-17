import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, videoSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      
        <iframe className={styles.video}
          src={videoSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} target="_blank">
            Prueba
          </a>
        )}
        <a href={source} className={styles.link} target="_blank">
          Código
        </a>
      </div>
    </div>
  );
};
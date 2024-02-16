import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, videoSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <video className={styles.video} controls>
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
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
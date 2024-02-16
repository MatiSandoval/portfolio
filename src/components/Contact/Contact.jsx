import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacto </h2>
        <p>Si le gustó mi perfil le dejo esta información, o en todo caso si puede ayudarme compartiéndolo.😁</p>
      </div>
      <ul className={styles.links}>
        
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mafosdeveloper/" target="_blank">MaFosDeveloper</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/MatiSandoval" target="_blank">MatiSandoval</a>
        </li>
      </ul>
    </footer>
  );
};

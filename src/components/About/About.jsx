import React, { useState } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const imageUrls = [
    getImageUrl("about/01.png"),
    getImageUrl("about/02.png"),
    getImageUrl("about/03.png"),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.content}>
        
        <img
          src={imageUrls[currentImageIndex]} 
          alt="Image about"
          className={styles.aboutImage}
          onClick={handleClick} 
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/utn.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>ING. EN SISTEMAS DE INFORMACIÓN - UTN</h3>
              <p>
                Estudiante avanzado de la carrera, cursando materias de 4to año. Además formé parte del grupo de investigación CINAPTIC para un proyecto sobre metodologías ágiles en 2023.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>INFORMATORIO - CHACO</h3>
              <p>
                Durante el año 2023 realicé el curso completo, comenzando con programación web, django-python, y luego culminando con la especialización de React.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                Tengo experiencia en desarrollo de aplicaciones intuitivas de escritorio y manejo de bases de datos con servidor hosting.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};


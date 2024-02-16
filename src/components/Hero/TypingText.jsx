import React, { useState, useEffect } from 'react';
import styles from "./Hero.module.css";
const TypingText = () => {
  const [text, setText] = useState('');
  const originalText = "Mee llamo Mati, y tengo habilidades en desarrollo web y programación. Soy proactivo, organizado y con capacidad para resolver problemas de manera efectiva. Apasionado por aprender y aplicar nuevas tecnologías en proyectos desafiantes."; 

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (index < originalText.length) {
          return prevText + originalText[index];
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });

      index++;
    }, 50); // Velocidad

    return () => clearInterval(intervalId);
  }, [originalText]);

  return <p className={styles.description}>{text}</p>;
};

export default TypingText;

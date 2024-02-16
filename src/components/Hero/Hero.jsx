import React, { useState } from "react";
import TypingText from './TypingText';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [email, setEmail] = useState('matisandoval.97@gmail.com');
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowCopiedMessage(true);

    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 3000);
  };

  const handleOpenEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola!</h1>
        <TypingText />
        <div className={styles.emailForm}>
        <span className={styles.emailBox}>{email}</span>
         <div className={styles.buttonContainer}>
        <button className={styles.contactBtn} onClick={handleCopyToClipboard}>Copiar</button>
        {showCopiedMessage && <div className={styles.copiedMessage}>Copiado al portapapeles</div>}
      </div>
        <button className={styles.contactBtn} onClick={handleOpenEmailClient}>Enviar correo</button>
        
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
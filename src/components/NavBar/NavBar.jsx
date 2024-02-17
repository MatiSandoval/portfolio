import React, {useState } from "react";
import styles from "./NavBar.module.css"
import {getImageUrl} from "../../utils"
export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return ( 
        <nav className={ styles.navbar}>
            <a className={styles.title}  href={window.location.href}>
                <img
        src={getImageUrl("nav/mf.png")}
        alt="LOGO"
        className={styles.logo}
      />
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                        }
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                 onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li>
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li>
                        <a href="#certificate">Certificados</a>
                    </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
    </nav>
    );
};
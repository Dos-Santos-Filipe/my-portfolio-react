import React from "react";

import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Obrigado.</h2>
        <p>Entre em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:filipesantos.psic@gmail.com">
            filipesantos.psic@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />
          <a
            href="https://www.linkedin.com/in/dos-santos-filipe"
            target="_blank"
          >
            linkedin.com/in/dos-santos-filipe
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Dos-Santos-Filipe" target="_blank">
            github.com/Dos-Santos-Filipe
          </a>
        </li>
      </ul>
    </footer>
  );
};

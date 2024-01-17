import React from "react";

import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <h2 id="about" className={styles.title}>
        Sobre
      </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/img-cv-port.jpeg")}
          alt="about image"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Web</h3>
              <p>
                Desenvolvimento de sites modernos e resposivos 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Front-end</h3>
              <p>
                Possuo experiência com o desenvolvimento de projetos front-end
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Back-end</h3>
              <p>
                Estudando  para me tornar um desenvolvedor full-satck
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

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
              <h3>Desenvolvedor de Software</h3>
              <p>
              Acredito na sinergia entre diferentes áreas da programação para criar soluções inovadoras e eficientes. Apaixonado em transformar ideias em código. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Full-Stack</h3>
              <p>
              Estou imerso na jornada para me tornar um desenvolvedor Full-Stack. Isso significa não apenas entender o front-end e o back-end, mas também como eles se integram para criar experiências completas.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Missão</h3>
              <p>
              Criar soluções que impactem positivamente a vida das pessoas, combinando tecnologia com psicologia para oferecer experiências completas, humanizadas e significativas.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

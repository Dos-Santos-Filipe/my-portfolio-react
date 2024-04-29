import React from "react";

import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Filipe!</h1>
        <p className={styles.description}>
        <h3 className={styles.subtitle}>Desenvolvedor de Software e Psicólogo.</h3>
        Curso Análise e desenvolvimento de sistemas e estou engajado na trilha para ser um desenvolvedor Full-Stack, crescendo e evoluindo a cada passo. 
        </p>
        <a
          href="mailto:filipesantos.psic@gmail.com"
          className={styles.contactBtn}
        >
          Entre em contato!
        </a>
      </div>
      <img
        src={getImageUrl("hero/CN-tower-profile-photo.jpeg")}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

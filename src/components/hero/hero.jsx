import React from "react";

import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Filipe</h1>
        <p className={styles.description}>
        Sou um desenvolvedor Web Frontend. Curso Análise e desenvolvimento de sistemas e estou estudando para ser um desenvolvedor Full-Stack. 
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

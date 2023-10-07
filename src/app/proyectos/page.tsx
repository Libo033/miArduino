import React from "react";
import styles from "./page.module.css";
import CardProject from "@/components/CardProject";

const Proyectos = () => {
  return (
    <main className={styles.page}>
      <h1>Proyectos</h1>
      <section className={styles.cardContainer}>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </section>
    </main>
  );
};

export default Proyectos;

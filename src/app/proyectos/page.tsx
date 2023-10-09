import React from "react";
import styles from "./page.module.css";
import CardProject from "@/components/CardProject";

const Proyectos = () => {
  return (
    <main className={styles.page}>
      <h1>Proyectos</h1>
      <section className={styles.cardContainer}>
        <CardProject
          name={"Trabajo Practico Valentin Libonati"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1696531567/03-arduino/lkayszeeyyabcyhceghn.png"
          }
          to={"tp1"}
          url={""}
          info={""}
        />
      </section>
    </main>
  );
};

export default Proyectos;

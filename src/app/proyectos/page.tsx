"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import CardProject from "@/components/CardProject";
import { ICardProject } from "@/libs/interfaces";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState<ICardProject[]>([]);

  useEffect(() => {
    fetch("/api/proyectos")
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((err) => {
        if (err instanceof Error) {
          console.log(err.message);
        }
      });
  }, []);

  return (
    <main className={styles.page}>
      <h1>Proyectos</h1>
      <section className={styles.cardContainer}>
        <CardProject
          _id=""
          name={"Trabajo Practico Valentin Libonati"}
          image={
            "https://res.cloudinary.com/dsuydyqgz/image/upload/v1696531567/03-arduino/lkayszeeyyabcyhceghn.png"
          }
          url={""}
          info={""}
        />
        {proyectos.length > 0 &&
          proyectos.map((pr) => (
            <CardProject
              key={pr._id}
              _id={pr._id}
              name={pr.name}
              image={pr.image}
              url={pr.url}
              info={pr.info}
            />
          ))}
      </section>
    </main>
  );
};

export default Proyectos;

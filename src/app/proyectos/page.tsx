"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import CardProject from "@/components/CardProject";
import { ICardProject } from "@/libs/interfaces";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState<ICardProject[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch("/api/proyectos", { signal })
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((err) => {
        if (err instanceof Error && err.name !== "AbortError") {
          console.log(err.message);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <main className={styles.page}>
      <h1>Proyectos</h1>
      <section className={styles.cardContainer}>
        {proyectos.length > 0 &&
          proyectos.map((pr) => <CardProject key={pr._id} {...pr} />)}
      </section>
    </main>
  );
};

export default Proyectos;

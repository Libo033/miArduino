"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { ICardProject } from "@/libs/interfaces";
import Image from "next/image";
import Proyectos from "../page";

const page = ({ params }: { params: { id: string } }) => {
  const [proyecto, setProyecto] = useState<ICardProject>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`/api/proyectos/${params.id}`, { signal })
      .then((res) => res.json())
      .then((data) => setProyecto(data))
      .catch((err) => {
        if (err instanceof Error && err.name !== "AbortError") {
          console.log(err.message);
        }
      });

    return () => controller.abort();
  }, [params]);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{proyecto && proyecto.name}</h1>
      <div className={styles.imageContainer}>
        {proyecto && (
          <Image
            className={styles.image}
            src={proyecto.image}
            alt="arduino"
            width={725}
            height={453}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        {proyecto && <p className={styles.text}>{proyecto.info}</p>}
      </div>
      {proyecto && (
        <a
          className={styles.link}
          href={proyecto.url}
          rel="noreferrer noopener"
          target="_blank"
        >
          Obtener copia en TINKERCAD
        </a>
      )}
    </main>
  );
};

export default page;

import React from "react";
import styles from "@/components/components.module.css";
import Image from "next/image";

const CardProject = () => {
  return (
    <article className={styles.CardProject}>
      <Image
        className={styles.CardProject_Image}
        src={
          "https://res.cloudinary.com/dsuydyqgz/image/upload/v1696531567/03-arduino/lkayszeeyyabcyhceghn.png"
        }
        alt="Circuito Arduino"
        width={725}
        height={453}
      />
      <p className={styles.CardProject_Title}>Trabajo Practico N°1</p>
    </article>
  );
};

export default CardProject;

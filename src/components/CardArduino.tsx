import React from "react";
import styles from "@/components/components.module.css";
import Image from "next/image";
import { ICardArduino } from "@/libs/interfaces";

const CardArduino: React.FC<ICardArduino> = ({ name, image, info }) => {
  return (
    <article className={styles.CardArduino}>
      <p className={styles.CardArduino_Title}>{name}</p>
      <div className={styles.CardArduino_FullInfo}>
        <div className={styles.CardArduino_ImageContainer}>
          <Image
            className={styles.CardArduino_Image}
            src={image}
            alt={name}
            width={1629}
            height={830}
          />
        </div>
        <div className={styles.CardArduino_InfoContainer}>
          {info.map((txt: string) => (
            <p className={styles.CardArduino_InfoText} key={txt}>
              {txt}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CardArduino;

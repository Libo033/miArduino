import React from "react";
import styles from "@/components/components.module.css";
import Image from "next/image";
import { ICardArduino } from "@/libs/interfaces";
// https://arduino.cl/arduino-2/

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
          <p className={styles.CardArduino_InfoText}>
            Microcontrolador ATmega328.
          </p>
          <p className={styles.CardArduino_InfoText}>
            Voltaje de entrada 7-12V.
          </p>
          <p className={styles.CardArduino_InfoText}>
            14 pines digitales de I/O (6 salidas PWM).
          </p>
          <p className={styles.CardArduino_InfoText}>6 entradas análogas.</p>
          <p className={styles.CardArduino_InfoText}>32k de memoria Flash.</p>
          <p className={styles.CardArduino_InfoText}>
            Reloj de 16MHz de velocidad
          </p>
        </div>
      </div>
    </article>
  );
};

export default CardArduino;

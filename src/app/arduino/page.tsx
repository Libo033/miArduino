"use client";
import React, { Fragment } from "react";
import styles from "@/app/arduino/page.module.css";
import CardArduino from "@/components/CardArduino";
import { Divider } from "@mui/material";
import data from "../../../ModelosArduinos.json";
import { ICardArduino } from "@/libs/interfaces";

const Arduino = () => {
  return (
    <main className={styles.page}>
      <section className={styles.section1}>
        <h1>Modelos de Arduino</h1>
        <p className={styles.section1_Text}>
          Una de las grandes cualidades de Arduino es su adaptabilidad, esto
          significa que para cada situación que se nos presente podemos
          conseguir una placa de Arduino que se adapte para cumplir con la tarea
          de la manera mas eficientemente posible, a continuación te mostramos
          los modelos mas populares de Arduino.
        </p>
        <div className={styles.cardContainer}>
          {data.map((arduino: ICardArduino, index: number) => (
            <Fragment key={arduino.name}>
              <CardArduino
                name={arduino.name}
                image={arduino.image}
                info={arduino.info}
              />
              {index + 1 !== data.length && <Divider />}
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Arduino;

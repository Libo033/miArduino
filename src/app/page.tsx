import Image from "next/image";
import styles from "./page.module.css";
import HeaderCard from "@/components/HeaderCard";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.section1}>
        <h1>¿Que es Arduino?</h1>
        <div className={styles.section1_info}>
          <p>
            <strong>
              Arduino es una plataforma de creación de electrónica de código
              abierto,
            </strong>
            &nbsp;la cual está basada en hardware y software libre, flexible y
            fácil de utilizar para los creadores y desarrolladores. Esta
            plataforma permite crear diferentes tipos de microordenadores de una
            sola placa a los que la comunidad de creadores puede darles
            diferentes tipos de uso.
            <br />
            El hardware libre son los dispositivos cuyas especificaciones y
            diagramas son de acceso público, de manera que cualquiera puede
            replicarlos. Esto quiere decir que Arduino ofrece las bases para que
            cualquier otra persona o empresa pueda crear sus propias placas,
            pudiendo ser diferentes entre ellas pero igualmente funcionales al
            partir de la misma base.
          </p>
          <Image
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1696258744/03-arduino/shmlrf8vsvz2bbk35n6w.png"
            }
            alt="arduino"
            width={1629}
            height={830}
          />
        </div>
      </section>
      <section className={styles.section2}>
        <h2>Algunas librerias que te podrian ayudar</h2>
        <div className={styles.section2_cards}>
          <HeaderCard
            title={"Liquid Crystal Displays"}
            info={
              "Find out how to wire an LCD to an Arduino, and how to use the LiquidCrystal library through a set of useful examples."
            }
            url={"https://docs.arduino.cc/learn/electronics/lcd-displays"}
          />
          <HeaderCard
            title={"Keypad"}
            info={
              "Keypad is a library for using matrix style keypads with the Arduino. As of version 3.0 it now supports mulitple keypresses."
            }
            url={"https://playground.arduino.cc/Code/Keypad/"}
          />
          <HeaderCard
            title={"Wire"}
            info={
              "This library allows you to communicate with I2C/TWI devices. On the Arduino boards with the R3 layout, the SDA and SCL are on the pin headers close to the AREF pin."
            }
            url={
              "https://www.arduino.cc/reference/en/language/functions/communication/wire/"
            }
          />
        </div>
      </section>
      <section className={styles.section3}>
        <a
          href="https://www.tinkercad.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className={styles.tinkercad}
            src={
              "https://res.cloudinary.com/dsuydyqgz/image/upload/v1696269487/03-arduino/tcem2tb682u3ajlnjnrq.svg"
            }
            alt="tinkercad"
            width={182}
            height={48}
          />
        </a>
        <p className={styles.section3_text}>
          Tinkercad es una sencilla aplicación en línea de diseño e impresión en
          3D para todos, creado por la empresa Autodesk.
        </p>
      </section>
    </main>
  );
}

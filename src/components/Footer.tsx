import React from "react";
import styles from "@/components/components.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_container}>
        <p className={styles.Footer_Text}>
          Todos los proyectos fueron creados usando el simulador de&nbsp;
          <a
            className={styles.Footer_pageLink}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.tinkercad.com/"
          >
            Tinkercad
          </a>
          .
        </p>
        <a
          className={styles.Footer_pageLink}
          target="_blank"
          rel="noreferrer noopener"
          href="https://valentinlibonat33.vercel.app/"
        >
          Valentin Libonati
        </a>
      </div>
    </footer>
  );
};

export default Footer;

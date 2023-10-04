import React from "react";
import styles from "@/components/components.module.css";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className={styles.NavigationBar}>
      <div className={styles.NavigationBar_logoContainer}>
        <Link href={"/"} className={styles.NavigationBar_logo}>
          Mis Arduinos
        </Link>
      </div>
      <ul className={styles.NavigationBar_listUl}>
        <li className={styles.NavigationBar_listLi}>
          <Link className={styles.NavigationBar_link} href={"/proyectos"}>
            proyectos
          </Link>
        </li>
        <li className={styles.NavigationBar_listLi}>
          <Link className={styles.NavigationBar_link} href={"/arduino"}>
            arduino
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

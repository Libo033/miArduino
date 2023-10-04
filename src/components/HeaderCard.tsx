import React from "react";
import styles from "@/components/components.module.css";
import { IHeaderCard } from "@/libs/interfaces";

const HeaderCard: React.FC<IHeaderCard> = ({ title, info, url }) => {
  return (
    <article className={styles.HeaderCard}>
      <div className={styles.HeaderCard_TitleContainer}>
        <p className={styles.HeaderCard_Title}>{title}</p>
      </div>
      <div className={styles.HeaderCard_InfoContainer}>
        <p className={styles.HeaderCard_Info}>{info}</p>
      </div>
      <div className={styles.HeaderCard_LinkContainer}>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.HeaderCard_Link}
        >
          Visitar
        </a>
      </div>
    </article>
  );
};

export default HeaderCard;

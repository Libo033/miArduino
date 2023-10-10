"use client";
import React from "react";
import styles from "@/components/components.module.css";
import Image from "next/image";
import { ICardProject } from "@/libs/interfaces";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const CardProject: React.FC<ICardProject> = ({ name, image, _id }) => {
  const router: AppRouterInstance = useRouter();

  return (
    <article
      onClick={() => router.push("/proyectos/" + _id)}
      className={styles.CardProject}
    >
      <Image
        className={styles.CardProject_Image}
        src={image}
        alt="Circuito Arduino"
        width={725}
        height={453}
      />
      <p className={styles.CardProject_Title}>
        {name.length < 30 ? name : name.slice(0, 30) + "..."}
      </p>
    </article>
  );
};

export default CardProject;

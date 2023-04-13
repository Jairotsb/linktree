import styles from "./Title.module.css";

import { HandWaving } from "@phosphor-icons/react";

interface ComponentProps {
  theme: boolean;
}

export default function Title(props: ComponentProps) {
  return (
      <div className={styles.title}>
        <img className={styles.cover} src="/eagle-background.jpg" alt="" />
        <div className={styles.profile}>
          <img
            className={
              props.theme ? styles.profileWithLight : styles.profileWithDark
            }
            src="https://github.com/Jairotsb.png"
          />
          <strong>Jairo Tunisse</strong>
          <span>
            Olá! Seja bem vindo <HandWaving size={24} />
          </span>
        </div>
      </div>
  );
}

import styles from "./Title.module.css";

import { HandWaving } from "@phosphor-icons/react";

interface ComponentProps {
  theme: boolean;
}

export default function Title(props: ComponentProps) {
  const background = props.theme ? '/eagle-background.jpg' : 'background-link.jpg';

  return (
      <div className={styles.title}>
        <img className={styles.cover} src={background} alt="background" />
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

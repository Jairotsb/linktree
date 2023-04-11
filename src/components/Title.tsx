import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.title}>
      <img className={styles.cover} src="/eagle-background.jpg" alt="" />
      <div className={styles.profile}>
        <img src="https://github.com/Jairotsb.png" />
        <strong>Jairo Tunisse</strong>
        <span>Olá! espero te ajudar por aqui.</span>
      </div>
    </div>
  );
}

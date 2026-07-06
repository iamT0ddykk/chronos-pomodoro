import styles from "./Styles.module.css";

export function Foot() {
  return (
    <footer className={styles.foot}>
      <a href="/about-pomodoro">Entenda como funciona a tecnica de pomodoro</a>
      <a href="/">
        Choronos pomodoro &copy; {new Date().getFullYear()} - Feito com 💚{" "}
      </a>
    </footer>
  );
}

import styles from "./Styles.module.css";
import { RouterLink } from "../RouterLink";

export function Foot() {
  return (
    <footer className={styles.foot}>
      <RouterLink href="/about-pomodoro">
        Entenda como funciona a tecnica de pomodoro
      </RouterLink>
      <RouterLink href="/">
        Choronos pomodoro &copy; {new Date().getFullYear()} - Feito com 💚{" "}
      </RouterLink>
    </footer>
  );
}

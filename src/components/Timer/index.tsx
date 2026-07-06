import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./Styles.module.css";

export function Timer() {
  const { state } = useTaskContext();

  return <div className={styles.timer}>{state.formattedSecondsRemaining}</div>;
}

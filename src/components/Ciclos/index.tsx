import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { nextCycleType } from "../../utils/getNextCycleType";
import styles from "./Styles.module.css";

export function Ciclos() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });

  return (
    <>
      <div className={styles.cicles}>
        <p>Ciclos:</p>
        <div className={styles.ciclesDots}>
          {cycleStep.map((_, index) => {
            const nextCycle = getNextCycle(index);
            const naextCycleType = nextCycleType(nextCycle);
            return (
              <span
                key={`${nextCycle}`}
                className={`${styles.ciclesDot} ${styles[naextCycleType]}`}
                aria-label="indicador de ciclo"
                title={naextCycleType}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
}

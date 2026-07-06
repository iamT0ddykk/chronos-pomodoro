import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { nextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const NextCycleType = nextCycleType(nextCycle);
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.workTime}min</b>
      </span>
    ),
    longBreakTime: <span>descanso sera longo</span>,
  };
  const tipsForNoActiveTask = {
    workTime: <span>Proximo ciclo e de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Proximo ciclo e de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Proximo descanso sera longo</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[NextCycleType]}
    </>
  );
}

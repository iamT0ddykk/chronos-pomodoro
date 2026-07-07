import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { MeuButaoDefault } from "../ButaoDefault";
import { Ciclos } from "../Ciclos";
import { MeuInput } from "../input";
import React, { useRef, useState } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { nextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { TimerWorkerManager } from "../../worker/TimerWorkerManager";
import { showMessage } from "../../adapters/showMessage";

export function MainForm() {
  const [taskName, setTaskName] = useState(" ");
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const NextCycleType = nextCycleType(nextCycle);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name
  function handleInterruptTask() {
    showMessage.error(`Tarefe ${taskName} interrompida!`);
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  function HandleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      showMessage.warning("Digite o nome da tarefa!");
      return;
    } else {
      showMessage.sucess(`Tarefa ${taskName} iniciada!`);
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[NextCycleType],
      type: NextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage((event) => {
      console.log("Principal recebeu:", event.data);
    });
  }

  return (
    <>
      <form onSubmit={HandleCreateNewTask} action="#">
        <h1>{taskName}</h1>
        <div className="formRow">
          <MeuInput
            id="MeuInput"
            type="text"
            labelText="Digite sua Task:"
            placeholder="Digite"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            ref={taskNameInput}
            disabled={!!state.activeTask}
            defaultValue={lastTaskName}
          ></MeuInput>
        </div>
        <div className="formRow">
          <Tips></Tips>
        </div>

        {state.currentCycle > 0 && (
          <div className="formRow">
            <Ciclos></Ciclos>
          </div>
        )}

        <div className="formRow">
          {!state.activeTask ? (
            <MeuButaoDefault
              type="submit"
              icon={<PlayCircleIcon />}
              color="green"
              key={"submit-button"}
            ></MeuButaoDefault>
          ) : (
            <MeuButaoDefault
              type="button"
              icon={<StopCircleIcon />}
              color="red"
              onClick={handleInterruptTask}
              key={"interrupt-button"}
            ></MeuButaoDefault>
          )}
        </div>
      </form>
    </>
  );
}

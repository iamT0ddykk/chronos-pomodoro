import React, { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBepps";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  if (state.activeTask?.name != undefined) {
    document.title = `${state.activeTask?.name} ${state.formattedSecondsRemaining} - chronos`;
  }
  if (state.secondsRemaining <= 0) {
    document.title = `chronos`;
  }

  useEffect(() => {
    if (!state.activeTask) return;

    const endDate = state.activeTask.startDate + state.secondsRemaining * 1000;
    const interval = setInterval(() => {
      const now = Date.now();
      const seconds = Math.ceil((endDate - now) / 1000);

      if (seconds <= 0) {
        if (playBeepRef.current) {
          playBeepRef.current();
          playBeepRef.current = null;
        }

        dispatch({ type: TaskActionTypes.COMPLETE_TASK });
        clearInterval(interval);
      } else {
        dispatch({
          type: TaskActionTypes.COUNT_DOWN,
          payload: { secondsRemaining: seconds },
        });
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeTask]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

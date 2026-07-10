import { SaveIcon } from "lucide-react";
import { MeuButaoDefault } from "../../components/ButaoDefault";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MeuInput } from "../../components/input";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from "./styles.module.css";
import React, { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
  useEffect(() => {
    document.title = "Configurações - Chronos";
  }, []);

  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    console.log(workTime, shortBreakTime, longBreakTime);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("DIGITE APENAS NUMEROS");
      console.log(formErrors);
    }

    if (workTime <= 0 || workTime > 99) {
      formErrors.push("foco precisa ser entre 1 e 99 minutos");
      console.log(formErrors);
    }

    if (shortBreakTime <= 0 || shortBreakTime > 30) {
      formErrors.push("descanso curto precisa ser entre 1 e 30 minutos");
      console.log(formErrors);
    }

    if (longBreakTime <= 0 || longBreakTime > 60) {
      formErrors.push("descanso longo precisa ser entre 1 e 60 minutos");
      console.log(formErrors);
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }
    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showMessage.sucess("Configurações salvas!");
  }
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>Configurações</Heading>
        </Container>
        <Container>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </Container>
        <Container>
          <form onSubmit={handleSaveSettings} className={styles.form}>
            <div className={styles["form-row"]}>
              <MeuInput
                id="workTime"
                labelText="Foco"
                ref={workTimeInput}
                defaultValue={state.config.workTime}
                type="number"
              ></MeuInput>
            </div>
            <div className={styles["form-row"]}>
              <MeuInput
                id="shortBreakTime"
                labelText="Descanso curto"
                ref={shortBreakTimeInput}
                defaultValue={state.config.shortBreakTime}
                type="number"
              ></MeuInput>
            </div>
            <div className={styles["form-row"]}>
              <MeuInput
                id="longBreakTime"
                labelText="Descanso longo"
                ref={longBreakTimeInput}
                defaultValue={state.config.longBreakTime}
                type="number"
              ></MeuInput>
            </div>
            <div className={styles["form-row"]}>
              <MeuButaoDefault
                color="green"
                icon={<SaveIcon></SaveIcon>}
                title="Salvar Configurações"
              ></MeuButaoDefault>
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  );
}

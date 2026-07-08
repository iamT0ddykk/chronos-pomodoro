import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";
import { MeuButaoDefault } from "../../components/ButaoDefault";

import styles from "./styles.module.css";
import { Heading } from "../../components/Heading";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
console.log(styles);
export function History() {
  const { state } = useTaskContext();

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>Historico</span>
            <span className={styles.buttonContainer}>
              <MeuButaoDefault
                icon={<TrashIcon></TrashIcon>}
                color="red"
                aria-label="Apagar todo o historico"
                title="Apagar"
              ></MeuButaoDefault>
            </span>
          </Heading>
        </Container>
        <Container>
          <div className={styles.resposiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {state.tasks.map((task) => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{new Date(task.startDate).toISOString()}</td>
                      <td>{task.interruptDate}</td>
                      <td>{task.type}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </MainTemplate>
    </>
  );
}

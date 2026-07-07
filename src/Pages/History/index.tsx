import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";
import { MeuButaoDefault } from "../../components/ButaoDefault";

import styles from "./styles.module.css";
import { Heading } from "../../components/Heading";
console.log(styles);
export function History() {
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
                  <th>Duracao</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 20 }).map((_, index) => {
                  return (
                    <tr key={index}>
                      <td>estudar</td>
                      <td>25min</td>
                      <td>20/04/2025 08:00</td>
                      <td>completa</td>
                      <td>foco</td>
                    </tr>
                  );
                })}
                <tr>
                  <td>estudar</td>
                  <td>25min</td>
                  <td>20/04/2025 08:00</td>
                  <td>completa</td>
                  <td>foco</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </MainTemplate>
    </>
  );
}

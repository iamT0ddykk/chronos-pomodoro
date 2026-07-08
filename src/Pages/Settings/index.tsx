import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MeuInput } from "../../components/input";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from "./styles.module.css";
export function Settings() {
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
          <form action="" className=".form">
            <div className={styles["form-row"]}>
              <MeuInput id="workTime" labelText="Foco"></MeuInput>
            </div>
            <div className="form-row">
              <MeuInput
                id="shortBreakTime"
                labelText="Descanso curto"
              ></MeuInput>
            </div>
            <div className="form-row">
              <MeuInput
                id="longBreakTime"
                labelText="Descanso longo"
              ></MeuInput>
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  );
}

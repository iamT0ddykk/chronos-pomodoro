import { useEffect } from "react";
import { Container } from "../../components/Container";
import { MainForm } from "../../components/mainForm";
import { Timer } from "../../components/Timer";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
  useEffect(() => {
    document.title = "Home - Chronos";
  }, []);
  return (
    <>
      <MainTemplate>
        <Container>
          <Timer />
        </Container>
        <MainForm></MainForm>
      </MainTemplate>
    </>
  );
}

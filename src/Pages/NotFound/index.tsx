import "./notFound.css";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import gat from "../../../public/gatinho.gif";

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <Container>
          <GenericHtml>
            <Heading>404 - Página não encontrada 🚀</Heading>
            <img src={gat} alt="" className="gatin" />
          </GenericHtml>
        </Container>
      </MainTemplate>
    </>
  );
}

import { JusticeContainer, MentoriaLogo } from "./style";
import justice from "../../assets/justice.svg";

const ApoioJuridico = () => {
  return (
    <JusticeContainer>
      <h1>Apoio jurídico e legal</h1>
      <MentoriaLogo>
        <img src={justice} alt="justice-logo" />
      </MentoriaLogo>
      <div>
        <h3>
          Assessoria para Retificação de Gênero, Registro Civil e outras
          questões.
        </h3>
      </div>
    </JusticeContainer>
  );
};

export default ApoioJuridico;

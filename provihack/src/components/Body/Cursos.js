import cursos from "../../assets/cursos.svg";
import { MentoriaLogo, WeOfferContainer } from "./style";

const Cursos = () => {
  return (
    <WeOfferContainer>
      <h1>Cursos</h1>
      <MentoriaLogo>
        <img src={cursos} alt="cursos logo" />
      </MentoriaLogo>
      <div>
        <h3>Tudo para você alcançar seu pertencimento</h3>
      </div>
    </WeOfferContainer>
  );
};

export default Cursos;

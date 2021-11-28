import ApoioJuridico from "./ApoioJuridico";
import { BodyContainer } from "./style";
import Title from "./Title";
import WeOffer from "./WeOffer";
import Cursos from "./Cursos";

const Body = () => {
  return (
    <BodyContainer>
      <Title />
      <WeOffer />
      <ApoioJuridico />
      <Cursos />
    </BodyContainer>
  );
};

export default Body;

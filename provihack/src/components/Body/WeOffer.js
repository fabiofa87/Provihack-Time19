import { MentoriaLogo, WeOfferContainer } from "./style";
import mentoria1 from "../../assets/mentoria1.svg";

const WeOffer = () => {
  return (
    <WeOfferContainer>
      <h1>Mentorias de Carreiras</h1>
      <MentoriaLogo>
        <img src={mentoria1} alt="mentoria logo" />
      </MentoriaLogo>
      <div>
        <p>Acompanhamos seu ingresso e desenvolvimento profissional.</p>
      </div>
    </WeOfferContainer>
  );
};

export default WeOffer;

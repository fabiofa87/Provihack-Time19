import styled from "styled-components";
import BluBackground from "../../assets/BluBackground.png";
import flag from "../../assets/flag.jpg";

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: #ffebfa;
  div:nth-child(2) {
    background-color: white;
  }
  div:nth-child(4) {
    background-color: white;
  }
`;

export const BackgroundOne = styled.div`
  background-image: url(${BluBackground});
  background-size: cover;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  color: white;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    flex-wrap: wrap;
    button {
      margin: 5px;
    }
  }
`;

export const BackgroundOneContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WeOfferContainer = styled.div`
  background-image: url(${flag});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-weight: bold;
`;

export const MentoriaLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
  }
`;

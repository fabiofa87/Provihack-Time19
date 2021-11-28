import styled from "styled-components";

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  font-family: "Roboto", sans-serif;
`;

export const BackgroundOne = styled.div`
  background-color: #f5a9b8;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  color: black;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 20px;
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
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-weight: bold;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    div {
      width: 70%;
    }
    img {
      width: 200px;
    }
  }
`;

export const MentoriaLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
  }
`;

export const JusticeContainer = styled.div`
  background-color: #f5a9b8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-weight: bold;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    div {
      width: 70%;
    }
    img {
      width: 200px;
    }
  }
`;

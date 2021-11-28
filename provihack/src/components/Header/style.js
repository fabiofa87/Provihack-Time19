import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  background-color: #9fddff;
  color: #eb5371;
  box-sizing: border-box;
  img {
    width: 20%;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin: 2px;
    }
    img {
      width: 60%;
      padding: 8px;
      margin-left: 15%;
    }
  }
`;

import styled from "styled-components";

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

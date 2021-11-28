import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-around;
  align-items: center;
  background-color: #9fddff;
  color: #121212;
  padding: 6px;
  font-family: "Fira Mono", monospace;
  a {
    text-decoration: none;
    color: white;
  }
  a:link {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

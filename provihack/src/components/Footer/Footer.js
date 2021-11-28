import { FooterContainer } from "./style";
import { Button } from "@mui/material";

const Footer = () => {
  const solucao = "<hack> CIStema";

  return (
    <FooterContainer>
      <div>
        <h3>Solução: {solucao}</h3>
        <h3>Grupo: hack_dolores</h3>
      </div>
      <hr />

      <h4>Integrantes:</h4>
      <Button sx={{ m: 2 }} variant="contained" size="small">
        <a href="https://www.linkedin.com/in/alissonfs/" target="_blank">
          Alisson
        </a>
      </Button>
      <Button sx={{ m: 2 }} variant="contained" size="small">
        <a
          href="https://www.linkedin.com/in/bianca-andrade-handan/"
          target="_blank"
        >
          Bianca
        </a>
      </Button>
      <Button sx={{ m: 2 }} variant="contained" size="small">
        <a
          href="https://www.linkedin.com/in/clarissalorencette/"
          target="_blank"
        >
          Clarissa
        </a>
      </Button>
      <Button sx={{ m: 2 }} variant="contained" size="small">
        <a href="https://www.linkedin.com/in/fabiofa87/" target="_blank">
          Fabio
        </a>
      </Button>
      <Button sx={{ m: 2 }} variant="contained" size="small">
        <a
          href="https://www.linkedin.com/in/raquel-lira-37b496198/"
          target="_blank"
        >
          Raquel
        </a>
      </Button>
      <Button sx={{ m: 2 }} variant="contained" size="small">
        <a
          href="https://www.linkedin.com/in/thainá-abrantes-5b9b59224/"
          target="_blank"
        >
          Thaina
        </a>
      </Button>
      <h4>Mentor:</h4>
      <Button sx={{ m: 2 }} variant="contained" size="small">
        <a href="https://www.linkedin.com/in/saboiaeric/" target="_blank">
          Eric Saboia
        </a>
      </Button>
    </FooterContainer>
  );
};

export default Footer;

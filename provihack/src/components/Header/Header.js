import React from "react";
import { HeaderContainer } from "./style";
import Headroom from "react-headroom";
import _Hack_CIStema_ from "../../assets/_Hack_ CIStema.png";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <Headroom
      style={{
        width: "100vw",
      }}
    >
      <HeaderContainer>
        <h1>
          <img src={_Hack_CIStema_} alt="" />
        </h1>
        <Button variant="contained" size="small">
          Mentorias
        </Button>
        <Button variant="contained" size="small">
          Cursos
        </Button>
        <Button variant="contained" size="small">
          Acessoria Jurídica
        </Button>
      </HeaderContainer>
    </Headroom>
  );
};

export default Header;

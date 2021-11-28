import React from "react";
import { HeaderContainer } from "./style";
import Headroom from "react-headroom";

const Header = () => {
  const headerText = "<Hack> CIStema";

  return (
    <Headroom
      style={{
        width: "100vw",
      }}
    >
      <HeaderContainer>
        <h1>{headerText}</h1>
        <button>Teste1</button>
        <button>Teste2</button>
      </HeaderContainer>
    </Headroom>
  );
};

export default Header;

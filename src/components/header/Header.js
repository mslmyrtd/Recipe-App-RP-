import React from "react";
import { Form } from "./Form";
import { HeaderContainer, MainHeader } from "./HeaderStyle";

export const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form />
    </HeaderContainer>
  );
};

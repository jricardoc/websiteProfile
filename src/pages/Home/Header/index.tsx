import React from "react";
import { Container, HeaderMenuLabel, HeaderMenuList, ScrollTo } from "./styles";

export default function Header() {
  return (
    <Container>
      <HeaderMenuLabel>
        <ScrollTo href="#home">
          <HeaderMenuList>Home</HeaderMenuList>
        </ScrollTo>
        <ScrollTo href="#about">
          <HeaderMenuList>About me</HeaderMenuList>
        </ScrollTo>
        <ScrollTo href="#skills">
          <HeaderMenuList>skills</HeaderMenuList>
        </ScrollTo>
        <HeaderMenuList>portfolio</HeaderMenuList>
        <HeaderMenuList>contact</HeaderMenuList>
      </HeaderMenuLabel>
    </Container>
  );
}

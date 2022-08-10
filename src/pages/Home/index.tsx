import React from "react";
import Text from "../../components/Text";
import theme from "../../global/styles/theme";
import Header from "./Header";
import { Container, TitleWrapper } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <TitleWrapper>
        <Text size={120} color={theme.colors.green_2} line={20} bold={true}>
          I'm a
        </Text>
        <Text size={180} color={theme.colors.green_light_1} line={20} bold={true}>Front-end</Text>
        <Text size={180} color={theme.colors.green_light_1} line={20} bold={true}>Developer</Text>
      </TitleWrapper>
    </Container>
  );
}

import React from "react";
import Text from "../../components/Text";
import theme from "../../global/styles/theme";
import Header from "./Header";
import {
  Container,
  HeaderMain,
  TitleWrapper,
  AboutWrapper,
  AboutTitle,
  ImageWrapper,
  InfoWrapper,
  InfoContainer,
  Info,
  MyData,
  NamePhone,
  NamePhoneTR,
  NamePhoneTD,
  DataTD,
  CountryEmail,
  Education,
  Image,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <HeaderMain>
        <Header />
        <TitleWrapper>
          <Text size={120} color={theme.colors.green_2} line={20} bold={true}>
            I'm a
          </Text>
          <Text
            size={180}
            color={theme.colors.green_light_1}
            line={0}
            bold={true}
          >
            Front-end
          </Text>
          <Text
            size={180}
            color={theme.colors.green_light_1}
            line={0}
            bold={true}
          >
            Developer
          </Text>
        </TitleWrapper>
      </HeaderMain>
      <AboutWrapper>
        <AboutTitle>
          <Text
            size={250}
            color={theme.colors.green_2}
            absolute={true}
            bold={true}
            opacity={0.2}
          >
            About
          </Text>
          <Text size={120} color={theme.colors.green_light_1}>
            About Me
          </Text>
        </AboutTitle>

        <InfoContainer>
          <ImageWrapper>
            <Image src={require("../../assets/images/IMG_4150.jpg")} />
          </ImageWrapper>

          <InfoWrapper>
            <Info>
              <Text
                size={50}
                color={theme.colors.green_light_1}
                bold={true}
                line={30}
              >
                My name is Ricardo Carvalho
              </Text>
              <Text size={30} color={theme.colors.green_light_1} line={30}>
                I'm a Systems Development Technician, I'm part of a Startup
                called Panjay, in which I develop the Front-end role. I'm
                currently specializing in Application Development with React
                Native at Rocketseat.
              </Text>
            </Info>

            <MyData>
              <NamePhone>
                <NamePhoneTR>
                  <NamePhoneTD>Name</NamePhoneTD>
                  <NamePhoneTD>Phone</NamePhoneTD>
                </NamePhoneTR>
                <NamePhoneTR>
                  <DataTD>Ricardo Carvalho</DataTD>
                  <DataTD>71999052537</DataTD>
                </NamePhoneTR>

                <NamePhoneTR>
                  <NamePhoneTD>Coutry</NamePhoneTD>
                  <NamePhoneTD>Email</NamePhoneTD>
                </NamePhoneTR>
                <NamePhoneTR>
                  <DataTD>Brazil, Salvador-BA</DataTD>
                  <DataTD>ricardoocarvalhoo10@gmail.com</DataTD>
                </NamePhoneTR>
              </NamePhone>

              <Education>
                <Text size={25} color={theme.colors.green_light_1} line={0}>Education</Text>
                <Text size={20} color={theme.colors.green_light_3} line={0}>Senai Cimatec - Technician: Systems Development</Text>
              </Education>
            </MyData>
          </InfoWrapper>
        </InfoContainer>
      </AboutWrapper>
    </Container>
  );
}

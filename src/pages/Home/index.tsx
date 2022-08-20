import React, { useRef } from "react";
import Background from "../../components/Background";
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
  ShadowBox,
  InfoWrapper,
  InfoContainer,
  Info,
  Myname,
  Name,
  MyData,
  NamePhone,
  NamePhoneTR,
  NamePhoneTD,
  DataTD,
  CountryEmail,
  Education,
  Image,
  SkillsWrapper,
  SpaceScroll,
  SkillContainer,
  FirstSkillContainer,
  SecondSkillContainer,
  FloatContainer,
  FloatContainerSecond,
  TextSkill,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <HeaderMain id="home">
        <Background />
        <Header />
        <TitleWrapper>
          <Text size={120} color={theme.colors.green_2} line={0} bold={true}>
            I'm a
          </Text>
          <Text size={180} color={theme.colors.green_light_1} line={0} bold>
            Front-end
          </Text>
          <Text size={180} color={theme.colors.green_light_1} line={0} bold>
            Developer
          </Text>
        </TitleWrapper>
        <SpaceScroll id="about"></SpaceScroll>
      </HeaderMain>
      <AboutWrapper>
        <Background />
        <AboutTitle>
          <Text
            size={250}
            color={theme.colors.green_2}
            absolute={true}
            bold
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
            <ShadowBox></ShadowBox>
          </ImageWrapper>

          <InfoWrapper>
            <Info>
              <Myname>
                My name is <Name>Ricardo Carvalho</Name>
              </Myname>
              <Text size={16} color={theme.colors.green_light_1} line={25}>
                I'm a Systems Development Technician, I'm part of a Startup
                called Panjay, in which I develop the Front-end role. I'm
                currently specializing in Application Development with React
                Native at Rocketseat. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Soluta voluptatibus modi aliquam, blanditiis
                officia, maiores dignissimos molestias asperiores rem
                repudiandae, temporibus laboriosam maxime sunt! Voluptates
                voluptatum aperiam iure quae libero.
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
                <Text size={25} color={theme.colors.green_light_1} line={0}>
                  Education
                </Text>
                <Text size={20} color={theme.colors.green_light_3} line={0}>
                  Senai Cimatec - Technician: Systems Development
                </Text>
              </Education>
            </MyData>
          </InfoWrapper>
        </InfoContainer>
      </AboutWrapper>

      <SpaceScroll id="skills"></SpaceScroll>
      <SkillsWrapper >
        <Background />
        <AboutTitle>
          <Text
            size={250}
            color={theme.colors.green_2}
            absolute={true}
            bold={true}
            opacity={0.2}
          >
            Skills
          </Text>
          <Text size={120} color={theme.colors.green_light_1}>
            Skills
          </Text>
        </AboutTitle>
        <SkillContainer>
          <FirstSkillContainer>
            <FloatContainer />
            <TextSkill>HTML and CSS</TextSkill>
            <FloatContainerSecond />
            <TextSkill>JavaScript</TextSkill>
            <FloatContainerSecond />
            <TextSkill>Typescript</TextSkill>
            <FloatContainerSecond />
            <TextSkill>Reactjs</TextSkill>
          </FirstSkillContainer>
          <SecondSkillContainer>
            <FloatContainer />
            <TextSkill>React Native</TextSkill>
            <FloatContainerSecond />
            <TextSkill>Angular</TextSkill>
            <FloatContainerSecond />
            <TextSkill>NextJs</TextSkill>
            <FloatContainerSecond />
            <TextSkill>Git and Github</TextSkill>
          </SecondSkillContainer>
        </SkillContainer>
      </SkillsWrapper>
    </Container>
  );
}

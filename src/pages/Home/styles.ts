import styled from "styled-components";

export const Container = styled.div``;

export const HeaderMain = styled.div`
  background-color: ${({ theme }) => theme.colors.green_bold_2};
`;

export const TitleWrapper = styled.div`
  padding-top: 300px;
  padding-left: 260px;
  display: inline-block;
`;

export const AboutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.green_bold_3};
`;

export const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding: 20px 60px 0 0;
`;

export const Image = styled.img`
  width: 517px;
  height: 777px;
  border-radius: 10px;
  position: absolute;
  box-shadow: 20px 20px 20px black;
`;

export const ShadowBox = styled.div`
  width: 517px;
  height: 777px;
  border-radius: 10px;
  border: 6px solid ${({ theme }) =>  theme.colors.green_2};
  margin: 40px;
  box-shadow: inset 20px 20px 20px black;
`;

export const Myname = styled.p`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.green_light_1};
  font-weight: bold;
  line-height: 50px;
`;

export const Name = styled.span`
  color: ${({ theme }) =>  theme.colors.green_2};
`;

export const InfoWrapper = styled.div`
  max-width: 700px;
`;
export const Info = styled.div``;

export const MyData = styled.div``;

export const NamePhone = styled.table`
  text-align: center;
  width: 100%;
  line-height: 20px;
`;

export const NamePhoneTR = styled.tr`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.green_light_3};
`;

export const NamePhoneTD = styled.td`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green_light_1};
  padding-top: 30px;
`;

export const DataTD = styled.td`
  padding-bottom: 50px;
`;

export const CountryEmail = styled.table`
  text-align: center;
  width: 100%;
  
`;
export const Education = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 80px;
  padding-top: 30px;
`;

export const SkillsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.green_bold_2};
`;

export const SpaceScroll = styled.div`
  width: 100%;
  height: 5px;
  position: relative;
  top: -50px;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 150px;
  padding-bottom: 150px;
`;

export const FirstSkillContainer = styled.div`
  height: 300px;
  width: 30%;
`;
export const SecondSkillContainer = styled.div`
  height: 300px;
  width: 30%;
`;

export const FloatContainer = styled.div`
  width: 27%;
  height: 15px;
  position: absolute;
  background-color: orange; 
  margin-top: 60px;
  z-index: 2;
`;

export const FloatContainerSecond = styled.div`
  width: 27%;
  height: 15px;
  position: absolute;
  background-color: orange; 
  margin-top: 40px;
  z-index: 2;
`;

export const TextSkill = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green_light_1};
  border-bottom: 15px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 20px;
  line-height: 20px;
`;
import styled from 'styled-components';

export const Container = styled.div`

`;

export const HeaderMain = styled.div`
  background-color: ${({ theme }) => theme.colors.green_bold_2};
  
`;

export const TitleWrapper = styled.div`
    padding-top: 120px;
    padding-left: 260px;
    display: inline-block;
`;

export const AboutWrapper = styled.div`
  background-color: ${({theme }) => theme.colors.green_bold_3};
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
  /* align-items: center; */
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding: 20px 60px 0 0;
`;

export const Image = styled.img`
  width: 517px;
  height: 777px;
  border-radius: 10px;
`;

export const InfoWrapper = styled.div`
  max-width: 700px;
`;
export const Info = styled.div`

`;
export const MyData = styled.div`

`;
export const NamePhone = styled.table`
  text-align: center;
  width: 100%;
  line-height: 20px;
`;

export const NamePhoneTR = styled.tr`
  font-size: 25px;
  color: ${({theme}) => theme.colors.green_light_3};
`;

export const NamePhoneTD = styled.td`
  font-size: 20px;
  color: ${({theme}) => theme.colors.green_light_1};

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
  padding-right: 130px;
`;


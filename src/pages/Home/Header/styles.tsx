import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green_bold_1};
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 70px;
`;

export const HeaderMenuLabel = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 30px;
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.green_light_1};
`;

export const HeaderMenuList = styled.li`
  padding-left: 60px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green_2};
  }
`;

export const ScrollTo = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.green_light_1};
`;
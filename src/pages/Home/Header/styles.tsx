import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderMenuLabel = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 30px;
  padding-top: 30px;
  color: ${({ theme }) => theme.colors.green_light_1};
`;

export const HeaderMenuList = styled.li`
  padding-left: 60px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green_2};
  }
`;

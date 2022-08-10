import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const HeaderMenuLabel = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 30px;
    margin-top: 60px;
    color: ${({theme}) => theme.colors.green_light_1};
`;

export const HeaderMenuList = styled.li`
    margin-left: 60px;
    cursor: pointer;
    &:hover {
        color: ${({theme}) => theme.colors.green_2};
    }
`;
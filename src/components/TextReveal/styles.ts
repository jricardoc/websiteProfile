import styled, { keyframes } from "styled-components/";

export const Title = styled.h1`
  /* --duration: 1s */
  /* --total: calc(var(--duration) + var(--delay)); */
  position: relative;
  display: block;
  color: transparent;
  overflow: hidden;
  animation: revealText 1s var(--total) forwards;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: left;
  background: #bb93fc;
  animation: rollIn var(--duration) var(--delay) forwards,
    rollOut var(--duration) var(--total) forwards;
  border-top: 3px solid #896ab9;
`;

export const FirstLabel = styled.span`
  /* --delay: 0.5s; */
  /* --total: calc(var(--duration) + var(--delay)); */
  position: relative;
  display: block;
  color: transparent;
  overflow: hidden;
  animation: revealText 1s var(--total) forwards;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
    background: #bb93fc;
    animation: rollIn var(--duration) var(--delay) forwards,
      rollOut var(--duration) var(--total) forwards;
  }
  &:nth-child(2)::after {
    border-top: 3px solid #896ab9;
  }
`;

export const SecondLabel = styled.span`
  /* --delay: 0.8s; */
  /* --total: calc(var(--duration) + var(--delay)); */
  position: relative;
  display: block;
  color: transparent;
  overflow: hidden;
  animation: revealText 1s var(--total) forwards;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
    background: #bb93fc;
    animation: rollIn var(--duration) var(--delay) forwards,
      rollOut var(--duration) var(--total) forwards;
  }
  &:nth-child(2)::after {
    border-top: 3px solid #896ab9;
  }
`;

export const revealText = keyframes`
    to {
        color: #fff;
    }
`;
export const rollIn = keyframes`
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
`;
export const rollOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(105%);
    }
`;

import styled from "styled-components";
import { Props } from "./types";

type ContainerProps = Required<Pick<Props, "color" | "size" | "bold" | "line" | "absolute" | "opacity">>;

export const Container = styled.p<ContainerProps>`
  /* display: flex; */
  /* margin-block-start: 0em; */
  /* margin-block-end: 0em; */
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => bold ? "bold" : "normal"};
  line-height: ${({ line }) => line}px;
  position: ${({ absolute }) => absolute ? "absolute" : "relative"};
  opacity: ${({ opacity }) => opacity};
`;
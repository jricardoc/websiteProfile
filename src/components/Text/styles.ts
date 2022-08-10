import styled from "styled-components";
import { Props } from "./types";

type ContainerProps = Required<Pick<Props, "color" | "size" | "bold" | "line">>;

export const Container = styled.h1<ContainerProps>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ bold }) => bold ? "bold" : "normal"};
  line-height: ${({ line }) => line}px;
`;
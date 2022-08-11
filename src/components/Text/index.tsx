import React from 'react'

import {Container} from "./styles"
import { Props } from "./types";

export default function Text({children, color = "black", size = 14, bold = false, line = 20, absolute = false, opacity = 1, ...rest}: Props) {
  return (
    <Container color={color} size={size} bold={bold} line={line} absolute={absolute} opacity={opacity} {...rest}>
        {children}
    </Container>
  )
}

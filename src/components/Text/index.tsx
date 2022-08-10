import React from 'react'

import {Container} from "./styles"
import { Props } from "./types";

export default function Text({children, color = "black", size = 14, bold = false, line = 15, ...rest}: Props) {
  return (
    <Container color={color} size={size} bold={bold} line={line} {...rest}>
        {children}
    </Container>
  )
}

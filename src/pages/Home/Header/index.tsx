import React from 'react'
import { Container, HeaderMenuLabel, HeaderMenuList } from './styles'

export default function Header() {
  return (
    <Container>
        <HeaderMenuLabel>
            <HeaderMenuList>Home</HeaderMenuList>
            <HeaderMenuList>About me</HeaderMenuList>
            <HeaderMenuList>skills</HeaderMenuList>
            <HeaderMenuList>portfolio</HeaderMenuList>
            <HeaderMenuList>contact</HeaderMenuList>
        </HeaderMenuLabel>
    </Container>
  )
}

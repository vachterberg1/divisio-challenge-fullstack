import React from 'react'
import { Container, ButtonLink } from './styles'
import logoImage from '../../static/logo.png'

export default function Start() {
  return (
    <Container>
      <img src={logoImage} />
      <ButtonLink to="/home">Start</ButtonLink>
    </Container>
  )
}

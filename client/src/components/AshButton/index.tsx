import React from 'react'
import { Container, Tooltip, ImageAsh } from './styles'
import { AshProps } from './types'
import ashImage from '../../static/ash.png'
import searchIcon from '../../static/search.png'

export default function AshButton({ openPokemons }: AshProps) {
  return (
    <>
      <Container onClick={openPokemons}>
        <ImageAsh src={ashImage} data-tip="React-tooltip" />
        <Tooltip
          place="top"
          type="light"
          effect="solid"
          borderColor={'#DD5366'}
          border={true}
        >
          <img src={searchIcon} />
        </Tooltip>
      </Container>
    </>
  )
}

import React from 'react'
import {
  PokemonContainer,
  PokemonImage,
  PokemonInfos,
  PokemonStats
} from './styles'
import { PokeCardProps } from './types'

export default function PokeCard({
  name,
  id,
  imagePoke,
  maxCP,
  maxHP,
  number
}: PokeCardProps) {
  return (
    <PokemonContainer>
      <PokemonImage image={imagePoke} />
      <PokemonInfos>
        <h1>#{number}</h1>
        <p>{name}</p>
        <PokemonStats>
          <span>CP:{maxCP}</span>
          <span>HP:{maxHP}</span>
        </PokemonStats>
      </PokemonInfos>
    </PokemonContainer>
  )
}

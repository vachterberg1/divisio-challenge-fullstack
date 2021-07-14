import PokeCard from 'components/PokeCard'
import React, { useState, useEffect } from 'react'
import { Container, BoxContent, CloseIcon } from './styles'
import { useQuery } from '@apollo/client'
import { IPokemons } from './types'
import { GET_POKEMONS } from '../../gql/getPokemons'
import Loader from '../../components/Loader'
import AshButton from 'components/AshButton'
import closeIcon from '../../static/close.png'

const Home = () => {
  const [pokemonInfos, setPokemonInfos] = useState<IPokemons[]>([])
  const [load, setLoading] = useState(true)
  const [showPokemons, setShowPokemons] = useState(false)

  const { data: { pokemons = [] } = {}, loading } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151
    }
  })

  const openPokemons = () => {
    setShowPokemons(true)
  }

  const closePokemons = () => {
    setShowPokemons(false)
  }

  useEffect(() => {
    if (pokemons) {
      setPokemonInfos(pokemons)
      setLoading(loading)
    }
  }, [pokemonInfos])

  return (
    <Container>
      {!showPokemons && <AshButton openPokemons={openPokemons} />}

      {showPokemons && (
        <BoxContent>
          <CloseIcon onClick={closePokemons}>
            <img src={closeIcon} />
          </CloseIcon>

          {pokemonInfos &&
            pokemonInfos.map((pokemon) => (
              <PokeCard
                key={pokemon.id}
                number={pokemon.number}
                name={pokemon.name}
                maxCP={pokemon.maxCP}
                maxHP={pokemon.maxHP}
                imagePoke={pokemon.image}
              />
            ))}

          {load && <Loader />}
        </BoxContent>
      )}
    </Container>
  )
}

export default Home

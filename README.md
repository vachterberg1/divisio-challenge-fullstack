# Divisio full stack challenge

## Estória
Criar uma listagem de pokemon usando a [PokeAPI](https://pokeapi.co/)

Logo na home page é possivel ver uma demonstração do resultado ao rodar o chamada `https://pokeapi.co/api/v2/pokemon?limit=20`, tendo como resultado uma listagem de pokemons.

## Instruções

### Passo 1:
Criar uma GraphQL Query no server consumindo essa api e fornecendo para o client

Exemplo de como deve ficar rodando no playground
```graphql
query {
  pokemons {
    id: Int
    name: String
  }
}
```

Exemplo de como seria o resultado esperado:
```json
[
  {
    "id": 1,
    "name": "bulbasaur"
  },
  {
    "id": 2,
    "name": "ivysaur"
  },
  ...
]
```

### Passo 2:
Criar um componente no client para listar esses pokemons. Uma listagem simples apenas exibindo o resultado.
Exemplo de como ficaria o uso do componente:
```js
  <PokemonList
    pokemons={data}
  />
```

### Passo 3:
Consumir a query utilizando Apollo client. Preferencia para uso do apollo-hooks.

## Documentação & Dicas
- Documentação sobre queries do apollo: https://www.apollographql.com/docs/react/data/queries/
- O Apollo já está pré-configurado para uso no client. Esse exercício consiste apenas em criar e consumir a query.
- Para duvidas, temos um canal exclusivo no nosso Slack no qual terá acesso temporário. Mais instruções será enviado por e-mail

## Requisitos
- Utilizar Typescript
- Utilizar styled-componentes

## Ponto bonus (não obrigatório)
- Explorar o [PokeAPI](https://pokeapi.co/) para quem sabe, criar uma nova tela para exibir os detalhes de cada pokemon ao clicar na lista. Fica ao seu encargo.
- Escrever testes (back e front)
- Sugerir melhorias na arquitetura do server imaginando como seria se ela fosse escalar
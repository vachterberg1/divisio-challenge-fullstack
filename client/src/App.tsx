import { GlobalStyle } from './style-guide/GlobalStyle'

import * as S from './styles'

const App = () => (
  <>
    <GlobalStyle />
    <S.Container>
      <S.Header>
        <S.Logo />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <S.Link>Learn React</S.Link>
      </S.Header>
    </S.Container>
  </>
)

export default App

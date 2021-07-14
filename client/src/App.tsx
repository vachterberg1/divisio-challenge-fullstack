import { ApolloProvider } from '@apollo/client'
import client from 'config/apollo-client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'screen/Home'
import Start from 'screen/Start'
import { GlobalStyle } from './style-guide/GlobalStyle'

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
)

export default App

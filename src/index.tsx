import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { client } from './config'
import { MemoryRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={client}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </ApolloProvider>
)

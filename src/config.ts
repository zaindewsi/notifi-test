import { ApolloClient, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const token = process.env.REACT_APP_JWT
const apiUrl = process.env.REACT_APP_API_URL as string

const wsLink = new WebSocketLink(
  new SubscriptionClient(apiUrl, {
    reconnect: true,
    connectionParams: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  })
)

export const client = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache(),
})

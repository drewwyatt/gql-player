import { ApolloProvider } from '@apollo/client'
import { FC } from 'react'
import client from './client'

const Provider: FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default Provider

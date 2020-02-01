import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { Todo } from '../models'
import resolvers from './resolvers/todo-resolvers'

const cache = new InMemoryCache()
cache.writeData({ data: { todos: [] as Todo[] } })

const link = new ApolloLink((operation, forward) => forward(operation))

const client = new ApolloClient({
  cache,
  link,
  resolvers,
})

export default client

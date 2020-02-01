import { Resolvers } from '@apollo/client'
import { GET_TODOS } from '../queries'

let lastId = 0
const getId = () => ++lastId

const resolvers: Resolvers = {
  Mutation: {
    addTodo: (_, { text }, { cache }) => {
      const { todos } = cache.readQuery({ query: GET_TODOS })
      // console.log(foo)
      cache.writeData({
        data: { todos: [...todos, { id: getId(), text, completed: false }] },
      })
      return true
    },
  },
}

export default resolvers

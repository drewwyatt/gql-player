import { gql } from '@apollo/client'

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) @client
  }
`

export const GET_TODOS = gql`
  query GetTodos {
    todos @client {
      id
      completed
      text
    }
  }
`

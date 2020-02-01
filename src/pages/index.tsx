import { useMutation, useQuery } from '@apollo/client'
import { FC, MutableRefObject, useCallback, useRef } from 'react'
import { ADD_TODO, GET_TODOS } from '../graphql/queries'

const Debug: FC<{ children: ReturnType<typeof useQuery> }> = ({
  children: { data, loading, error },
}) => (
  <fieldset>
    <legend>{loading ? 'Loading' : !!error ? 'Error' : 'Data'}</legend>
    {loading ? '...' : JSON.stringify(error ?? data, null, 2)}
  </fieldset>
)

const Index: FC = () => {
  const ref = useRef() as MutableRefObject<HTMLVideoElement>
  const [addTodo] = useMutation(ADD_TODO)
  const result = useQuery(GET_TODOS)

  const playPause = useCallback(
    () => (ref.current?.paused ? ref.current?.play() : ref.current?.pause()),
    [ref.current?.paused],
  )

  return (
    <>
      <video ref={ref}>
        <source src="/videos/bun33s.mp4" type="video/mp4" />
      </video>
      <fieldset>
        <legend>Controls</legend>
        <button onClick={playPause}>Play/Pause</button>
      </fieldset>
      <fieldset>
        <legend>local state</legend>
        <button onClick={() => addTodo({ variables: { text: 'hey' } })}>Add Todo</button>
        <Debug>{result}</Debug>
      </fieldset>
      <style jsx global>
        {`
          html,
          body {
            background: #333;
            color: white;
          }
        `}
      </style>
    </>
  )
}

export default Index

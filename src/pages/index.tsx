import { FC, MutableRefObject, useCallback, useRef } from 'react'

const Index: FC = () => {
  const ref = useRef() as MutableRefObject<HTMLVideoElement>
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

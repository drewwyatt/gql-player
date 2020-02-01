import { FC } from 'react'

const Index: FC = () => {
  return (
    <>
      <fieldset>
        <legend>Look at this video</legend>
        <video controls>
          <source src="/videos/bun33s.mp4" type="video/mp4" />
        </video>
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

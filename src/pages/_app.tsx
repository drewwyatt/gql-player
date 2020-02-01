import { NextPage } from 'next'
import { Provider } from '../graphql'

type Props = { Component: NextPage; pageProps: any }

const RootComponent: NextPage<Props> = ({ Component, pageProps }) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
)

export default RootComponent

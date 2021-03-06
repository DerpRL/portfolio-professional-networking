import '../../public/styles/reset.scss'
import '../../public/styles/global.scss'
import '../../public/styles/scrollbar.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

import '../styles/globals.css'
import '../public/assets/scss/app.scss';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

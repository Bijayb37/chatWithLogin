import '../styles/globals.css'
import { MainProvider } from '../contexts/index'
import { SocketProvider } from '../contexts/SocketContext'

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <SocketProvider>
        <Component {...pageProps} />
      </SocketProvider>
    </MainProvider>
  )
}

export default MyApp

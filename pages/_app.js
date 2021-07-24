import '../styles/globals.css'
import { SocketProvider } from '../contexts/SocketContext'
import { MainProvider } from '../contexts/index'

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

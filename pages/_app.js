import '../styles/globals.css'
import { MainProvider } from '../new/context'
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

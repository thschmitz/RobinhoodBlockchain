import { RobinhoodProvider } from '../context/RobinhoodContext'
import '../styles/globals.css'
import {MoralisProvider} from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl="https://vmxeylxmklqu.usemoralis.com:2053/server" appId="ezyrZJDuiDOTfZYEJ8EfOt1tNdKiWrS2M91znOha">
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>

  )
}

export default MyApp

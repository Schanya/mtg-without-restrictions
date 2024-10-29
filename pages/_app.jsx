import { GoogleTagManager } from "@next/third-parties/google";

import '../globals.css'

function App({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <GoogleTagManager gtmId="GTM-NXWSF5XP" />
  </>
}

export default App
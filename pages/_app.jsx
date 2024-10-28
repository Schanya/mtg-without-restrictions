import { GoogleTagManager } from "@next/third-parties/google";

import '../globals.css'

function App({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <GoogleTagManager gtmId="GTM-PWMBPGV8" />
  </>
}

export default App
import '@/styles/globals.css'

import { Footer, Header } from "@/components"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

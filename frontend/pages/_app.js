import '@/styles/globals.css'

import { Footer, Header } from "@/components"
export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

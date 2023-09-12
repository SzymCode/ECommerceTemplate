import { Provider } from "react-redux"

import '@/styles/globals.css'
import store from "@/store/store"
import { Footer, Header } from "@/components"

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white text-black">
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </div>
  )
}
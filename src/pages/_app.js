import "bootstrap/dist/css/bootstrap.css"
import "../css/global.css"
import Contact from "../components/Contact"
import Header from "../components/header/Header"
import { Analytics } from "@vercel/analytics/react"

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="outer-container">
      <Analytics />
      {!pageProps.noHeader && <Header />}
      <Component {...pageProps} />
      <Contact />
    </div>
  )
}

import "bootstrap/dist/css/bootstrap.css"
import "../../public/css/global.css"
import Contact from "../components/Contact"
import Header from "../components/header/Header"

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="outer-container">
      {!pageProps.noHeader && <Header />}
      <Component {...pageProps} />
      <Contact />
    </div>
  )
}

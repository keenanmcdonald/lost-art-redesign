import "bootstrap/dist/css/bootstrap.css"
import "../css/global.css"
import Contact from "../components/Contact"
import Header from "../components/header/Header"
import cxs from "cxs"

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div
        className={cxs({
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
        })}
      >
        <Header />
        <Component {...pageProps} />
        <Contact />
      </div>
    </div>
  )
}

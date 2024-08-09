import '../css/global.css'
import Contact from '../components/(old)/Contact'
import Header from '../components/(old)/header/Header'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="outer-container">
      {!pageProps.noHeader && <Header />}
      <Component {...pageProps} />
      <Contact />
    </div>
  )
}

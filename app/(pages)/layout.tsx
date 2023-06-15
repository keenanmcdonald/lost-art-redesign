import "bootstrap/dist/css/bootstrap.css"
import "../../src/css/global.css"
import Contact from "../../src/components/Contact"
import Header from "../../src/components/header/Header"


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="outer-container">
        <Header />
          {children}
        <Contact />
      </body>
    </html>
  )
}

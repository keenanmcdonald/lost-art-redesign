import "../../src/css/global.css";
import Contact from "../../components/Contact";
import Header from "../../components/header/Header";

export const metadata = {
  title: "Lost Art Records",
  description: "Lost Art Records: Home of Blaze Foley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="outer-container">
        <Header />
        {children}
        <Contact />
      </body>
    </html>
  );
}

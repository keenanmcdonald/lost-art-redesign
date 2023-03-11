import Document, { Html, Head, Main, NextScript } from "next/document"
import cxs from "cxs"

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site for Lost Art Records" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export async function getInitialProps(ctx) {
  const initialProps = await Document.getInitialProps(ctx)
  const styles = cxs.css()
  cxs.reset()

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </>
    ),
  }
}

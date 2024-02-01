import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Jason Anderson',
    description: 'Jason Anderson',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.jasonanderson} />
        <meta property="og:site_name" content={meta.jasonanderson} />
        <meta property="og:description" content={meta.jasonanderson} />
        <meta property="og:title" content={meta.jasonanderson} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@j23a" />
        <meta name="twitter:title" content={meta.j23a} />
        <meta name="twitter:description" content={meta.j23a} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

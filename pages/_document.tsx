import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

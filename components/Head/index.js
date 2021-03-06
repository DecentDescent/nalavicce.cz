import Head from "next/head";

export default () => (
  <Head>
    <meta http-equiv="content-language" content="cs-cz" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Lavička – Nejsi v tom sám!</title>
    <meta
      name="description"
      content="Projekt Lavička je bezplatná následná psychoterapeutická služba pro adolescentní pacienty, kteří prošli psychiatrickou hospitalizací."
    />
    <meta property="og:title" content="Lavička – Nejsi v tom sám!" />
    <meta
      property="og:description"
      content="Projekt Lavička je bezplatná následná psychoterapeutická služba pro adolescentní pacienty, kteří prošli psychiatrickou hospitalizací."
    />
    <meta property="og:image" content="/static/og.jpg" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta property="og:type" content="website" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicon/safari-pinned-tab.svg"
      color="#d55241"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="preload" href="/static/photos/people.jpg" as="image" />
    <link rel="preload" href="/static/photos/dita_big.jpg" as="image" />
    <link rel="preload" href="/static/photos/honza_big.jpg" as="image" />
    <link rel="preload" href="/static/photos/kristyna_big.jpg" as="image" />
    <link rel="preload" href="/static/photos/lucka_big.jpg" as="image" />
    <link rel="preload" href="/static/photos/martina_big.jpg" as="image" />
  </Head>
);

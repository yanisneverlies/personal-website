import Head from "next/head";

import "styles.css";


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;

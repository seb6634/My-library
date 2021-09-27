import "../styles/style.css";
import "../styles/reset.css";

import Head from "next/head";

import Layout from "../components/ui/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ma biblioteque</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

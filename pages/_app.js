import "../styles/style.css";
import "../styles/reset.css";

import Layout from "../components/ui/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";
import "../styles/index.scss";
import Layout from "../components/layouts/layout";
import nProgress from "nprogress";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    nProgress.configure({ showSpinner: false });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

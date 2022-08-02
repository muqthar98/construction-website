import Footer from "../components/footer/index";
import Header from "../components/header/index";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
0;
export default MyApp;

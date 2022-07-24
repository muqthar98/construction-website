import Head from "next/head";
import Main from "../pages/components/Main/index"
import Header from "../pages/components/Header/index"
import Footer from "../pages/components/Footer/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Construction Site | Home</title>
        <meta name="description" content="This is for a construction site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

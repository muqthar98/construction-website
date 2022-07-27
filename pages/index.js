import Head from "next/head";
import Main from "../components/Main/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Construction Site | Home</title>
        <meta name="description" content="This is for a construction site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}

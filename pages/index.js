import Head from "next/head";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Construction Site | Home</title>
        <meta name="description" content="This is for a construction site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

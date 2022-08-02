import Head from "next/head";
import Main from "../components/main/index";


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

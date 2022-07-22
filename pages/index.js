import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

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

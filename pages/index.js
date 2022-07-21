import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Construction Site | Home</title>
        <meta name="description" content="This is for a construction site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`h-16 fixed top-0 bg-white w-full z-50`}>
       
    <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <a href="#hero" class="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

            <a href="#about" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">about</a>

            <a href="#projects" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">projects</a>

            <a href="#contact" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">contact</a>

           
        </div>
    </nav>
    
      </header> 


      <main className={`mt-16`} >
        <section id='hero' className={`h-[calc(100vh-4rem)] bg-blue-50`}></section>
        <section id='about' className={`h-[calc(100vh-4rem)] bg-red-50`}></section>
        <section id='projects' className={`h-[calc(100vh-4rem)] bg-green-50`}></section>
        <section id='contact' className={`h-[calc(100vh-4rem)] bg-purple-50`}></section>
      </main>

      <footer className={`h-32 bg-yellow-50`}>
     
      </footer>
    </>
  )
}

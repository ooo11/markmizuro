import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../interfaces/post";
import Link from "next/link";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout home post>
        <Head>
          <title>Mark Mizuro</title>
        </Head>
        <Container>

        <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
         Mark Mizuro
        </h2>
       <Link href={'/posts'} className="mx-2 px-1 pt-1 border-b-2 border-main font-bold font-mono focus:outline-none focus:ring-4 focus:ring-main focus:ring-opacity-50 focus:border-transparent  text-sm hover:bg-main" >Penulisan.</Link>
      
        
        </Container>

        <p className="opacity-90 sm:max-w-md">Selamat datang ke penulisan saya. Untuk mendapatkan update semasa mengenai penulisan saya, sila rujuk{' '}
         <a href="https://twitter.com/mizuropeter" className="border-b-2 border-main font-bold font-mono focus:outline-none focus:ring-4 focus:ring-main focus:ring-opacity-50 focus:border-transparent  text-sm hover:bg-main">Twitter saya.</a>
         {' '} Di sini saya paparkan hasil kerja dalam bentuk laman sesawang. Mengunakan semua yang telah saya pelajari, laman ini adalah untuk eksperimentasi menggunakan NextJS. 
        </p>

        <div className="relative transform scale-75 sm:m-16 sm:transform-none">
        <Link href={'/quotes'}>
        <div className="bg-main  p-20 hover:bg-black">
        <div className="relative w-[212px] h-[100px] box-content 

        before:content-[''] before:absolute before:top-0 before:left-0
        before:h-[60px] before:w-[60px] before:border-[20px] 
        before:border-black before:border-solid before:rounded-t-[50px]
        before:rounded-tr-[50px] before:rounded-b-0 before:rounded-l-[50px] 
        before:-rotate-45 before:box-content before:hover:border-main

        after:content-[''] after:absolute after-top-0 after:right-0 
        after:left-auto after:h-[60px] after:w-[60px] after:border-[20px] 
        after:border-black after:border-solid after:rounded-t-[50px] 
        after:rounded-r-[50px] after:rounded-b-0 after:rounded-l-0 
        after:rotate-45 after:box-content after:hover:border-main">
          
        </div>
        </div>
        </Link>
        </div>
        
      </Layout>
    </>
  );
}

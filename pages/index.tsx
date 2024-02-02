import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../interfaces/post";
import Link from "next/link";
import { getTime } from "date-fns";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  // const d = new Date();
  // console.log(`Timenow ` + d);


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
          <Link href={'/posts'} className="mx-2 px-1 pt-1 border-b-2 border-main font-bold font-mono focus:outline-none focus:ring-4 focus:ring-main focus:ring-opacity-50 focus:border-transparent  text-sm hover:bg-main" >Essay.</Link>


        </Container>

        <p className="opacity-90 sm:max-w-xl xl:min-w-xl">Welcome to my sites where you can find my essay. Do follow me on {' '}
          <a href="https://twitter.com/mizuropeter" className="border-b-2 border-main font-bold font-mono focus:outline-none focus:ring-4 focus:ring-main focus:ring-opacity-50 focus:border-transparent  text-sm hover:bg-main">Twitter.</a>
          {' '}I'm using this website as an experimentation platform for my learning journey, especially with NextJS. Additionally, it serves as a journal for documenting my experiences and thoughts for the days ahead.
        </p>

        <div className="">
          <Link href={'/quotes'}>
            <div className="p-20 max-w-sm w-full mx-auto">
              <div className="animate-bounce">
                <div className="relative w-[212px] h-[100px] box-content 

                  before:content-[''] before:absolute before:top-0 before:left-0
                  before:h-[60px] before:w-[60px] before:border-[20px] 
                  before:border-main before:border-solid before:rounded-t-[50px]
                  before:rounded-tr-[50px] before:rounded-b-0 before:rounded-l-[50px] 
                  before:-rotate-45 before:box-content 

                  after:content-[''] after:absolute after-top-0 after:right-0 
                  after:left-auto after:h-[60px] after:w-[60px] after:border-[20px] 
                  after:border-main after:border-solid after:rounded-t-[50px] 
                  after:rounded-r-[50px] after:rounded-b-0 after:rounded-l-0 
                  after:rotate-45 after:box-content">
                </div>
              </div>
            </div>
          </Link>
        </div>

      </Layout>
    </>
  );
}

import Container from "../../components/container";
import ListStory from "../../components/listStory";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Quotes</title>
        </Head>
        <Container>
        <section>
      <div >
      <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        Quotes.
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 mb-32 sm:max-w-md ">
       <ul className="text-sm space-y-4">
          <li >
          "The less confident you are, the more serious you have to act." – Tara Ploughman
          </li>
          <li >
          The sons of Hermes love to play,<br />
          And only do their best when they<br />
          Are told they oughtn't;<br />
          Apollo's children never shrink<br />
          From boring jobs but have to think<br />
          Their work important.<br /> 
          – W. H. Auden, Under Which Lyre
          </li>
          <li>
          "Americans spend an average of four hours a day watching TV, an hour of that enduring ads. That adds up to an astounding 10% of total leisure time; at current rates, a typical viewer fritters away three years of his life getting bombarded with commercials."

– Scott Woolley, Forbes
          </li>
       </ul>
      </div>
    </section>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
  ]);

  return {
    props: { allPosts },
  };
};

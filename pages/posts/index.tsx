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
      <Layout post>
        <Head>
          <title>Penulisan</title>
        </Head>
        <Container>
          <ListStory posts={allPosts} />
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

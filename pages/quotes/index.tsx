import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllQuotes } from "../../lib/api";
import Head from "next/head";
import Quote from "../../interfaces/quote";

type Props = {
  allQuotes: string;
};

export default function Index({ allQuotes }: Props) {

  const obj = JSON.parse(allQuotes);

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
              <ul className="text-sm space-y-12">
                {obj.map((quote) => (
                  <li key={quote.content}>"{quote.content}"<br /> - {quote.writer}</li>
                ))}
              </ul>
            </div>

          </section>
        </Container>
      </Layout>
    </>
  );
}

//to pass data in Njs i need to make the data into props..

export const getStaticProps = async () => {
  const allQuotes = getAllQuotes()

  return {
    props: {
      allQuotes
    }
  }
};

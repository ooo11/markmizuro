import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Site by ${CMS_NAME}`,
  description: `An essay written by ${CMS_NAME}.`
};

const Meta = () => {
  return (
    <Head>

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />

    </Head>
  );
};

export default Meta;

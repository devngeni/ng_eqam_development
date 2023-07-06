import Head from "next/head";
import { useRouter } from "next/router";

const HeadMetaData = () => {
  const router = useRouter();
  let pageTitle = "EQAM Capital";

  // Modify page title if the current path is not the root ("/")
  if (router.pathname !== "/") {
    pageTitle += ` | ${router.pathname.replace("/", "")}`;
  }
  return (
    <>
      <Head>
        <title>{pageTitle} </title>
        <meta
          name="description"
          content="Building the Future of Web3 Technology in East Africa and Beyond"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default HeadMetaData;

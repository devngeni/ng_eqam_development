import Head from "next/head";
import { useRouter } from "next/router";

const HeadMetaData = ({ pageTitle }) => {
  const router = useRouter();
  const title = pageTitle ? `${pageTitle}` : "EQAM CAPITAL";
  const ogUrl = router.pathname ? `${router.pathname}` : "";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Building the Future of Web3 Technology in East Africa and Beyond"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/EQLogo.png" />

        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content="Building the Future of Web3 Technology in East Africa and Beyond"
        />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/EQLogo.png" />
      </Head>
    </>
  );
};

export default HeadMetaData;

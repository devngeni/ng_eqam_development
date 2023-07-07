import Head from "next/head";
import { useRouter } from "next/router";

const HeadMetaData = () => {
  const router = useRouter();
  const pageTitle =
    router.pathname === "/"
      ? "EQAM Capital"
      : `EQAM Capital | ${router.pathname.replace("/", "")}`;

  const ogUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
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
        <meta
          property="og:url"
          content={`https://eqam-capital.vercel.app/${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/EQLogo.png" />
      </Head>
    </>
  );
};

export default HeadMetaData;

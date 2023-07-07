import Head from "next/head";
import { useRouter } from "next/router";

const HeadMetaData = () => {
  const router = useRouter();
  const pageTitle =
    router.pathname === "/"
      ? "EQAM Capital"
      : `EQAM Capital | ${router.pathname.replace("/", "")}`;

  const ogUrl = typeof window !== "undefined" ? window.location.href : "";
  const ogImage =
    typeof window !== "undefined" ? `${window.location.origin}/EQLogo.png` : "";

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
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Head>
    </>
  );
};

export default HeadMetaData;

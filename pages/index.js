import Navbar from "@/components/Navbar/Navbar";
import Start from "@/components/Start/Start";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
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
      <Navbar />
      <Start />
    </>
  );
}

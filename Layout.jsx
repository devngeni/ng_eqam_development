import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";

const Layout = (children) => {
  return (
    <div>
      <Head>
        <title>Eq_eqam_Development</title>
        <meta
          name="description"
          content="Building the Future of Web3 Technology in East Africa and Beyond"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
          <main>{children}</main>
          
    </div>
  );
};

export default Layout;

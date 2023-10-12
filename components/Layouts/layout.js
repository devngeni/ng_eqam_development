import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HeadMetaData from "../HeadMetaData";
import { MediumProvider } from "@/Helpers/context";

export default function HomeLayout({ children, showFooter, pageTitle }) {
  const [posts, setPosts] = useState([]);

  const getMediumFeeds = async () => {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eqcap"
    );
    const data = await res.json();
    setPosts(data.items);
  };

  useEffect(() => {
    getMediumFeeds();
  }, []);
  return (
    <MediumProvider value={posts}>
      <HeadMetaData pageTitle={pageTitle} />
      <Navbar />
      {children}
      {showFooter && <Footer />}
    </MediumProvider>
  );
}

import Navbar from "@/components/Navbar/Navbar";
import style from "@/styles/Resources.module.css";
import { items } from "@/components/Constants";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import Image from "next/image";
import EQlogo from "@/public/EQLogo.png";
import { useEffect, useState } from "react";
import { TruncatedWords } from "@/components/contentInnerHtml";

const Resources = () => {
  const router = useRouter();
  const {
    resource_container,
    resource_header,
    article_wrapper,
    heading_3,
    paragraph_7,
    inline_block,
    block,
    article_info,
    article_info_sep
  } = style;

  const [posts, setPosts] = useState([])
  // console.log(items);
  const GetMediumFeeds = async () => {
    let response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eqcap", {
      method: "GET",
    });

    let data = await response.json();
    console.log(data.items);
    setPosts(data.items)
  }

  useEffect(() => {
    GetMediumFeeds()
  }, [])




  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className="blog_logo">
          <Image className="logo" src={EQlogo} alt="EqLogo" />
        </div>
        <div className={resource_container}>
          <h1 className={resource_header}>Resource</h1>
          <div className={inline_block}>
            {posts.map((item, index) => {
              return (
                <div
                  className={article_wrapper}
                  key={index}
                  onClick={() => {
                    router.push(`Resources/${index}`);
                  }}
                >
                  <h3 className={heading_3}>{item.title}</h3>
                  <br />
                  <TruncatedWords description={item.description} />

                  <br />
                  <div className={block}>
                    <p className={article_info}>{item.pubDate}</p>
                    <p className={article_info_sep}>|</p>
                    <p className={article_info}>{item.author}</p>
                    <div />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Resources;

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/Blog.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EQlogo from "@/public/EQLogo.png";
import { blogs } from "@/components/Blog";
import { useRouter } from "next/router";
import { Content } from "@/components/contentInnerHtml";

const Blog = () => {
  const {
    main_container,
    blog_container,
    blog_header,
    blog_content,
    blog_name_date
  } = styles;
  const router = useRouter()
  const { Blog } = router.query


  const [post, setPost] = useState([])
  const GetMediumFeeds = async () => {
    let response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40eqcap", {
      method: "GET",
    });

    let data = await response.json();
    console.log(data.items[Blog]);
    setPost(data.items[Blog])
  }

  useEffect(() => {
    GetMediumFeeds()
  }, [])

  if (!post) {
    GetMediumFeeds()
  }

  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className="blog_logo">
          <Image className="logo" src={EQlogo} alt="EqLogo" />
        </div>
        <div className={main_container}>
          <div className={blog_container}>
            <div className={blog_header}>{post?.title}</div>
            <div className={blog_name_date}>
              <span>{post?.pubDate}</span>
              <span>|</span>
              <span>{post?.author}</span>
            </div>
            <div className={blog_content}>
              <Content description={post?.content} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Blog
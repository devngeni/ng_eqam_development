import styles from "@/styles/Blog.module.css";
import Image from "next/image";
import React from "react";
import EQlogo from "@/public/EQLogo.png";
import { useRouter } from "next/router";
import { Content } from "@/Helpers/contentInnerHtml";
import { usePostsContext } from "@/Helpers/context";
import HomeLayout from "@/components/Layouts/layout";

const Blog = () => {
  const {
    main_container,
    blog_container,
    blog_header,
    blog_content,
    blog_name_date,
  } = styles;
  const router = useRouter();
  const { Blog } = router.query;

  const posts = usePostsContext();
  const post = posts[Blog];

  if (!post) {
    return (
      <div className="ContainerWrapper">
        <div className={blog_container}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 200px)",
              gap: "10px",
            }}
          >
            <p style={{ fontSize: "16px" }}>No blog found !!!</p>
            <button
              style={{ cursor: "pointer", padding: "8px 15px" }}
              onClick={() => {
                router.push("/Resources");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
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
  );
};

export default Blog;

Blog.getLayout = function getLayout(page) {
  return (
    <HomeLayout showFooter={true} pageTitle={"Eqam capital | Blogs"}>
      {page}
    </HomeLayout>
  );
};

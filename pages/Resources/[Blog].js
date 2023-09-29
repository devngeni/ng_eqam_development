import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/Blog.module.css";
import Image from "next/image";
import React from "react";
import EQlogo from "@/public/EQLogo.png";
import { blogs } from "@/components/Blog";

const Blog = () => {
  const {
    main_container,
    blog_container,
    blog_header,
    blog_content,
    blog_name_date
  } = styles;

  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className="blog_logo">
          <Image className="logo" src={EQlogo} alt="EqLogo" />
        </div>
        <div className={main_container}>
          {blogs.map((blog, index) => {
            return (
              <div className={blog_container} key={index}>
                <div className={blog_header}>{blog.heading}</div>
                <div className={blog_name_date}>
                  <span>{blog.date}</span>
                  <span>{blog.author}</span>
                </div>
                <div className={blog_content}>{blog.content}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

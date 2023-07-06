import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div
          style={{
            position: "relative",
            width: "80vw",
            left: "20vw",
            height: "100vh",
          }}
        >
          <div
            style={{
              left: "0",
              marginTop: "155px",
              fontSize: "45px",
              fontWeight: "700",
            }}
          >
            Blog title
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

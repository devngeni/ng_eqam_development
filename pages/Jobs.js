import React from "react";
import style from "../styles/Jobs.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
const Jobs = () => {
  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className={style.container}>
          <div className={style.content_head}>Jobs</div>
          <div className={style.Rec1}>
            <div className={style.Text2}>Please check back next time!</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Jobs;
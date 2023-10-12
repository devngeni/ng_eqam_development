import React from "react";
import style from "../styles/Jobs.module.css";
import Image from "next/image";
import EQlogo from "@/public/EQLogo.png";
import HomeLayout from "@/components/Layouts/layout";

const Jobs = () => {
  return (
    <div className="ContainerWrapper">
      <div className="blog_logo">
        <Image className="logo" src={EQlogo} alt="EqLogo" />
      </div>
      <div className={style.container}>
        <div className={style.content_head}>Jobs</div>
        <div className={style.Rec1}>
          <div className={style.Text2}>Please check back next time!</div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;

Jobs.getLayout = function getLayout(page) {
  return (
    <HomeLayout showFooter={false} pageTitle={"Eqam capital | Jobs"}>
      {page}
    </HomeLayout>
  );
};

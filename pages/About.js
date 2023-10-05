import Navbar from "@/components/Navbar/Navbar";
import style from "../styles/About.module.css";
import Footer from "@/components/Footer/Footer";
import { AboutContent } from "@/components/Constants";
import Image from "next/image";
import EQlogo from "@/public/EQLogo.png";

const About = () => {
  const { about_container, about, span_text } = style;
  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className="blog_logo">
          <Image className="logo" src={EQlogo} alt="EqLogo" />
        </div>
        <div className={about_container}>
          <div className={about}>
            <span className={span_text}>
            Equator is East Africa’s leading trading firm and crypto asset fund. Specializing in proprietary trading, 
            <br />market making by provision of liquidity across CEX  DEX exchanges, efficient trade execution to
              <br />strategy and market adoption.
            </span>
            <br />
            {AboutContent.map((item, index) => (
              <span key={index}>
                <strong>{item.header}</strong>
                <br />
                <span>{item.paragragh}</span>
              </span>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;

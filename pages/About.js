import Navbar from "@/components/Navbar/Navbar";
import style from "../styles/About.module.css";
import Footer from "@/components/Footer/Footer";
import { AboutContent } from "@/components/Constants";

const About = () => {
  const { about_container, about, span_text } = style;
  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className={about_container}>
          <div className={about}>
            <span className={span_text}>
              NGC Ventures invests in early stage, web 3.0 infrastructure
              startups and projects. We identify <br /> projects with innovative
              ideas to today’s blockchain problems and work with them from
              ideation
              <br /> to strategy and market adoption
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

import Image from "next/image";
import styles from "./Footer.module.css";
import image from "../../public/btn.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { footer_container, footer_copyright, btn, footer_text } = styles;
  return (
    <div className={footer_container}>
      <div className={footer_copyright}>
        <span>Home</span>
        <h1>© {new Date().getFullYear()} EQAM CAPITAL</h1>
      </div>

      <div className={btn} onClick={scrollToTop}>
        <Image src={image} alt="" />
      </div>
    </div>
  );
};

export default Footer;
//IoIosArrowUp

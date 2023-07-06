import Image from "next/image";
import styles from "./Footer.module.css";
import image from "../../public/btn.png";
// import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const { footer_container, footer_copyright, btn, footer_text } = styles;
  return (
    <div className={footer_container}>
      <div className={footer_copyright}>
        <span>Home</span>
        <h5>© {new Date().getFullYear()} EQAM CAPITAL</h5>
      </div>

      <button className={btn} onClick={scrollToTop}>
        {/* <IoIosArrowUp style={{width:"33"}} /> */}
        <Image src={image} alt="" />
      </button>
    </div>
  );
};

export default Footer;
//IoIosArrowUp

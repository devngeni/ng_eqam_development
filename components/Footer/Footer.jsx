import Image from "next/image";
import styles from "./Footer.module.css";
import image from "../../public/btn.png";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const {
    footer_container,
    footer_copyright,
    nav_links,
    phone,
    Email,
    LinkedIn,
    Twitter,
    Medium,
    Substack,
    btn,
    footer_wrapper,
  } = styles;
  return (
    <div className={footer_container}>
      <div className={footer_copyright}>
        <h1>© {new Date().getFullYear()} EQAM CAPITAL</h1>
      </div>
      <div className={footer_wrapper}>
        <div className={nav_links}>
          <Link
            href="tel:+254 742 740 432"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={phone}></div>
          </Link>
          <Link
            href="mailto:info@eqcap.fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={Email}></div>
          </Link>
          <Link
            href="https://www.linkedin.com/company/eqam-capital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={LinkedIn}></div>
          </Link>
          <Link
            href="https://twitter.com/eQamCap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={Twitter}></div>
          </Link>
          <Link
            href="https://medium.com/@eqcap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={Medium}></div>
          </Link>
          <Link
            href="https://substack.com/@eqamquants"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={Substack}></div>
          </Link>
        </div>
        <div className={btn} onClick={scrollToTop}>
          <Image src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

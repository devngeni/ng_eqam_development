import Link from "next/link";
import style from "../styles/Contact.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EQlogo from "@/public/EQLogo.png";
import Image from "next/image";


const ContactUs = () => {
  const { contact_container, contact_heading, paragragh, content, nav_links, phone, Email, LinkedIn, Twitter, Medium,
  Substack } = style;
  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className="blog_logo">
          <Image className="logo" src={EQlogo} alt="EqLogo" />
        </div>
        <div className={contact_container}>
          <div className={content}>
            <span className={contact_heading}>Contact us</span>
            <div className={paragragh}>
              <p>
              If you are engaged in trading related to the following themes, we encourage you to reach out to us at info@eqcap.fund. For any general inquiries, please feel free<br /> to contact us via,+254742740432,
              <span>
                  <Link href="https://twitter.com/eQamCap/" target="_blank">
                    twitter
                  </Link>
                </span>
                .
              </p>
              <p>
                Our investment philosophy centers around the core infrastructure of the blockchain, with a particular focus on initiatives that enhance and facilitate crypto trading.
              </p>
            </div>
            <div className={nav_links}>
            <Link href="tel:+254 742 740 432" target="_blank" rel="noopener noreferrer">
              <div className={phone}></div>
              </Link>
            <Link href="mailto:info@eqcap.fund" target="_blank" rel="noopener noreferrer">
              <div className={Email}></div>
              </Link>
            <Link href="https://www.linkedin.com/company/eqam-capital/" target="_blank" rel="noopener noreferrer">
              <div className={LinkedIn}></div>
              </Link>
            <Link href="https://twitter.com/eQamCap" target="_blank" rel="noopener noreferrer">
              <div className={Twitter}></div>
              </Link>
            <Link href="https://medium.com/@eqcap" target="_blank" rel="noopener noreferrer">
              <div className={Medium}></div>
              </Link>
            <Link href="https://substack.com/@eqamquants" target="_blank" rel="noopener noreferrer">
              <div className={Substack}></div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;

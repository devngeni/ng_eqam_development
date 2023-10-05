import Link from "next/link";
import style from "../styles/Contact.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EQlogo from "@/public/EQLogo.png";
import Image from "next/image";

const ContactUs = () => {
  const { contact_container, contact_heading, paragragh, content } = style;
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
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/Blog.module.css";
import Image from "next/image";
import React from "react";
import EQlogo from "@/public/EQLogo.png";

const Blog = () => {
  const {
    blog_container,
    blog_header,
    blog_content,
    blog_name_date,
 
  } = styles;

  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className="blog_logo">
          <Image className="logo" src={EQlogo} alt="EqLogo" />
        </div>
        <div className={blog_container}>
          <div className={blog_header}>
            Convergence: A New Governance Paradigm in DeFi
          </div>
          <div className={blog_name_date}>
            <span>May 22, 2023</span>
            <span>I Yaoher Pang</span>
          </div>
          <div className={blog_content}>
            Introducing Convergence: The Governance Blackhole DeFi has been a
            cornerstone of the web3 industry, ranging from basic features such
            as Collateralized Debt Positions (CDPs) to complex financial
            engineering products within the Curve ecosystem. The industry as a
            whole constantly innovates and pushes the boundaries of Defi
            straddling the fine line of revolutionary financial products and
            degen ponzinomics. On that note we are excited to be backing
            Convergence and the new ideas they bring to the DeFI ecosystem.
            Convergence aims to be a “Governance Blackhole” where they accrue
            governance rights across various protocols to optimize both the
            underlying yield generated and the routing of liquidity. How
            Convergence Interacts with the Broader DeFi Ecosystem Various
            mechanisms where we are all familiar with such as gauges, bonding or
            tokenization of staked assets will be used but Convergence goes a
            step further to improve on these existing models. Besides these
            mechanisms ConvHow Convergence Interacts with the Broader DeFi
            Ecosystem Various mechanisms where we are all familiar with such
            as gauges, bonding or tokenization of staked assets will be used but
            Convergence goes a step further to improve on these existing models.
            Besides these mechanisms Convergence introduces a new token model
            for their governance token CVG. CVG can be staked for either
            vote-escrowed CVG (veCVG) or yield-sharing CVG (ysCVG) where one
            directs the emissions and one accrues protocol revenue. Accrued
            governance tokens such as veCRV / sdCRV / vlCVX / sdFXS will be used
            for voting for either CVG pools (CVG-FraxBP & cvgTOKE/TOKE) or
            bribing pools that increase protocol revenue. One scenario of how
            the bribes earned from veCRV/sdCRV is that they will be swapped to
            CRV and compounded into CRV/ETH on Stake. Bribes earned from vlCVX
            swapped to CVX and compounded into CVX/FraxBP.gence introduces a new
            token model for their governance token CVG. Convergence will be
            working with key players throughout the DeFi ecosystem starting with
            Tokemak followed by other partners within the Curve ecosystem.
            Eventually ysCVG can be viewed as an index token to the Curve
            ecosystem by gathering rewards from all the different protocols. 
            By supporting Convergence we hope to bring more efficient liquidity
            routing, especially in current times where the market is facing a
            lack of liquidity as compared to before. With all that being said
            the various mechanisms Convergence brings are rather unique and can
            be better understood here.  Disclosure: NGC Ventures may have
            investments in some or all of the tokens and projects mentioned in
            this article. This statement discloses potential conflicts of
            interest, and should not be construed as a recommendation to
            purchase any token or participate in any of the aforementioned
            ecosystems. The content is intended purely for educational purposes
            and should not be interpreted as investment advice. Please exercise
            caution and conduct your own due diligence if considering any
            involvement in these projects.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

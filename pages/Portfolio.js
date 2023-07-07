import React from "react";
import style from "../styles/Portfolio.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import EQlogo from "@/public/EQLogo.png";

const Portfolio = () => {
  const cardData = [
    {
      title: "Blockchains (L1s, L2s)",
      links: [
        { links_href: "/#", title_link: "Algorand" },
        { links_href: "/#", title_link: "Avalanche" },
        { links_href: "/#", title_link: "NYM" },
        { links_href: "/#", title_link: "Nibiru Chain" },
        { links_href: "/#", title_link: "MultiversX (Elrond)" },
        { links_href: "/#", title_link: "Mina" },
        { links_href: "/#", title_link: "Myria" },
        { links_href: "/#", title_link: "Oasys" },
        { links_href: "/#", title_link: "Mysten Labs" },
        { links_href: "/#", title_link: "Oasis Labs" },
        { links_href: "/#", title_link: "Polkadot" },
        { links_href: "/#", title_link: "Scroll" },
        { links_href: "/#", title_link: "Skale" },
        { links_href: "/#", title_link: "Solana" },
        { links_href: "/#", title_link: "Subspace" },
        { links_href: "/#", title_link: "Chromia" },
        { links_href: "/#", title_link: "Aura Network" },
        { links_href: "/#", title_link: "Persistence" },
        { links_href: "/#", title_link: "Anoma" }
      ]
    },
    {
      title: "Blockchains (L1s, L2s)",
      links: [
        { links_href: "/#", title_link: "Algorand" },
        { links_href: "/#", title_link: "Avalanche" },
        { links_href: "/#", title_link: "NYM" },
        { links_href: "/#", title_link: "Nibiru Chain" },
        { links_href: "/#", title_link: "MultiversX (Elrond)" },
        { links_href: "/#", title_link: "Mina" },
        { links_href: "/#", title_link: "Myria" },
        { links_href: "/#", title_link: "Oasys" },
        { links_href: "/#", title_link: "Mysten Labs" },
        { links_href: "/#", title_link: "Oasis Labs" },
        { links_href: "/#", title_link: "Polkadot" },
        { links_href: "/#", title_link: "Scroll" },
        { links_href: "/#", title_link: "Skale" },
        { links_href: "/#", title_link: "Solana" },
        { links_href: "/#", title_link: "Subspace" },
        { links_href: "/#", title_link: "Chromia" },
        { links_href: "/#", title_link: "Aura Network" },
        { links_href: "/#", title_link: "Persistence" },
        { links_href: "/#", title_link: "Anoma" }
      ]
    },
    {
      title: "Blockchains (L1s, L2s)",
      links: [
        { links_href: "/#", title_link: "Algorand" },
        { links_href: "/#", title_link: "Avalanche" },
        { links_href: "/#", title_link: "NYM" },
        { links_href: "/#", title_link: "Nibiru Chain" },
        { links_href: "/#", title_link: "MultiversX (Elrond)" },
        { links_href: "/#", title_link: "Mina" },
        { links_href: "/#", title_link: "Myria" },
        { links_href: "/#", title_link: "Oasys" },
        { links_href: "/#", title_link: "Mysten Labs" },
        { links_href: "/#", title_link: "Oasis Labs" },
        { links_href: "/#", title_link: "Polkadot" },
        { links_href: "/#", title_link: "Scroll" },
        { links_href: "/#", title_link: "Skale" },
        { links_href: "/#", title_link: "Solana" },
        { links_href: "/#", title_link: "Subspace" },
        { links_href: "/#", title_link: "Chromia" },
        { links_href: "/#", title_link: "Aura Network" },
        { links_href: "/#", title_link: "Persistence" },
        { links_href: "/#", title_link: "Anoma" }
      ]
    },
    {
      title: "Blockchains (L1s, L2s)",
      links: [
        { links_href: "/#", title_link: "Algorand" },
        { links_href: "/#", title_link: "Avalanche" },
        { links_href: "/#", title_link: "NYM" },
        { links_href: "/#", title_link: "Nibiru Chain" },
        { links_href: "/#", title_link: "MultiversX (Elrond)" },
        { links_href: "/#", title_link: "Mina" },
        { links_href: "/#", title_link: "Myria" },
        { links_href: "/#", title_link: "Oasys" },
        { links_href: "/#", title_link: "Mysten Labs" },
        { links_href: "/#", title_link: "Oasis Labs" },
        { links_href: "/#", title_link: "Polkadot" },
        { links_href: "/#", title_link: "Scroll" },
        { links_href: "/#", title_link: "Skale" },
        { links_href: "/#", title_link: "Solana" },
        { links_href: "/#", title_link: "Subspace" },
        { links_href: "/#", title_link: "Chromia" },
        { links_href: "/#", title_link: "Aura Network" },
        { links_href: "/#", title_link: "Persistence" },
        { links_href: "/#", title_link: "Anoma" }
      ]
    }
  ];
  console.log(cardData);
  return (
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className="blog_logo">
          <Image className="logo" src={EQlogo} alt="EqLogo" />
        </div>
        <div className={style.Container}>
          <div className={style.content_header}>Portfolio</div>
          <div className={style.mainContainer}>
            {cardData.map((item, index) => {
              const links = item.links;
              return (
                <div className={style.card1} key={index}>
                  <div className={style.title}>{item.title}</div>
                  <div className={style.appContainer}>
                    {links.map((myItem, index) => {
                      return (
                        <div key={index}>
                          <Link href={myItem.links_href} target="_blank">
                            <div className={style.linkContainers}>
                              {myItem.title_link}
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className={style.appContainer}>
                        <div className={style.P1container}>
                            <div className={style.P1}>Alethea AI</div>
                        </div>
                        <div className={style.P2container}>
                            <div className={style.P2}>Anything World</div>
                        </div>
                    </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;

import React from "react";
import style from "../styles/Portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import EQlogo from "@/public/EQLogo.png";
import HomeLayout from "@/components/Layouts/layout";

const Portfolio = () => {
  const cardData = [
    {
      title: "Large-Cap Cryptocurrencies",
      links: [
        { links_href: "https://bitcoin.org/en/", title_link: "Bitcoin" },
        { links_href: "https://ethereum.org/en/ ", title_link: "Ethereum" },
        { links_href: "https://tether.to/", title_link: "Tether (USDT)" },
        {
          links_href: "https://www.binance.com/en/bnb",
          title_link: "Binance Coin(BNB)",
        },
      ],
    },
    {
      title: "Mid-Cap cryptocurrencies",
      links: [
        { links_href: "https://solana.com/", title_link: "Solana" },
        { links_href: "https://cardano.org/", title_link: "Cardano" },
        { links_href: "https://www.avax.network/", title_link: "Avalanche" },
        { links_href: "https://polygon.technology/", title_link: "Polygon" },
        { links_href: "https://www.polkadot.network/", title_link: "Polkadot" },
      ],
    },
    {
      title: "Small-Cap Cryptocurrencies",
      links: [
        { links_href: "https://cosmos.network/", title_link: "Cosmos" },
        { links_href: "https://algorand.com/", title_link: "Algorand" },
        { links_href: "https://chain.link/", title_link: "Chainlink" },
        { links_href: "https://ripple.com/", title_link: "Ripple" },
      ],
    },
    {
      title: "DAO tokens",
      links: [
        { links_href: "https://uniswap.org/", title_link: "Uniswap" },
        { links_href: "https://makerdao.com/en/", title_link: "MakerDAO" },
        { links_href: "https://www.sushi.com/", title_link: "SushiSwap" },
        { links_href: "https://aave.com/", title_link: "Aave" },
        { links_href: "https://compound.finance/", title_link: "Compound" },
      ],
    },
    {
      title: "Web3 tokens",
      links: [
        {
          links_href: "https://axieinfinity.com/",
          title_link: "Axie Infinity",
        },
        { links_href: "https://app.gala.games/", title_link: "Gala" },
        { links_href: "https://decentraland.org/", title_link: "Decentraland" },
        { links_href: "https://injective.com/", title_link: "Injective" },
        {
          links_href: "https://www.sandbox.game/en/",
          title_link: "The Sandbox",
        },
      ],
    },
    {
      title: "Exchanges",
      links: [
        { links_href: "https://www.bybit.com/ ", title_link: "Bybit" },
        { links_href: "https://www.binance.com/en", title_link: "Binance" },
        { links_href: "https://uniswap.org/", title_link: "Uniswap" },
        { links_href: "https://info.dextools.io/", title_link: "Dextools" },
        { links_href: "https://pancakeswap.finance/", title_link: "Pancake" },
      ],
    },
  ];
  // console.log(cardData);
  return (
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
    </div>
  );
};

export default Portfolio;

Portfolio.getLayout = function getLayout(page) {
  return (
    <HomeLayout showFooter={true} pageTitle={"Eqam capital | Portfolio"}>
      {page}
    </HomeLayout>
  );
};

import Navbar from "@/components/Navbar/Navbar";

const About = () => {
  const { about_container, about, span_text } = style;
  return (
    <>
      <Navbar />
      <div className={about_container}>
        <div className={about}>
          <span>
            <span className={span_text}>
              NGC Ventures invests in early stage, web 3.0 infrastructure
              startups and projects. We identify <br /> projects with innovative
              ideas to today’s blockchain problems and work with them from
              ideation
              <br /> to strategy and market adoption
            </span>
            <br />‍
            <br />
            <strong>Our Investment Thesis</strong>
            <br />
            We identify projects with disruptive innovation, aiming to solve
            problems with solutions that are characterized by simplicity, cost
            <br />
            affordability, speed, uniqueness and a compelling product market
            fit.
            <br />‍<br />
            <strong>Our Beginnings</strong>
            <br />
            Founded in 2017, NGC Ventures manages over 500M in AUM. Our team
            comprises of seasoned entrepreneurs and fund managers as well as
            “degens” of the blockchain space alike. We are globally diverse with
            team members present in Singapore, San Francisco, California, Texas,
            London, Shanghai and Taipei. Our LPs include listed entities from
            web 2.0, family offices, HNWI as well as founders who were our
            investees.
            <br />‍<br />
            <strong>Our Approach</strong>
            <br />
            At NGC Ventures, we take a long-term and hands-on approach to
            investing, supporting our portfolio companies through their
            entrepreneurial journey from market access, go-to-market strategy,
            recruiting, technical expertise to regulatory guidance. Our focus on
            the web3 and crypto space reflects our belief in the potential of
            this new era of the internet to bring about a wave of creativity and
            entrepreneurship.
            <br />
            <br />
            <strong>Funding Research</strong>
            <br />
            Many of tomorrow’s web 3.0 projects emerge out of today’s research.
            As such we invest heavily via grants, donations or investments into
            research teams at institutions of higher learning including:
            National University of Singapore, Nanyang Technology University, and
            UC Berkeley.
            <br />‍<br />
            <strong>Investing in other Funds</strong>
            <br />
            NGC Ventures makes investments in other funds in the web 3.0 space
            that complement our investment thesis. This provides our investees
            with a much greater reach in terms of resources and connections in
            the space. Our investments include funds like Griffin Gaming Fund,
            Bitkraft, Republic Capital, Metaversal, Figment Capital,
            Collab+Currency, Symbolic Capital, WWG Ventures, Dispersion Capital,
            Geekcartel, Impossible Finance, 6th Man Ventures, Blockchain
            Founders Fund, Sanctor Capital, Shima Capital, Finenace Ventures,
            Borderless Capital, Bonfire Union and Longhash Ventures.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;

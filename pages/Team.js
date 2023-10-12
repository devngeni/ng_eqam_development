import { LinkIcon, MemberImg } from "@/components/ImagesStyles";
import HomeLayout from "@/components/Layouts/layout";
import { EQAMLogo } from "@/components/Start/Start";
import styles from "@/styles/Team.module.css";
import { useEffect, useState } from "react";

// Array of member data
const members = [
  {
    name: "Paul Abuya",
    role: "Chief Operation Officer, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696233648/imgpsh_fullsize_anim_ra2aar.png",

    description:
      "I am a seasoned professional with extensive experience serving as the Chief Operations Officer (COO) at eQam Capital, where I manage a high-performing trading desk consistently achieving daily volumes exceeding $1,000,000. My multifaceted role encompasses overseeing daily trading operations and spearheading research efforts aimed at cultivating automated alpha-generating strategies.\n\nMy academic background is anchored in a B.S. in Actuarial Science and an M.S. in Entrepreneurship and Innovation Management, both earned from The University of Nairobi. This robust educational foundation has empowered me to excel in roles of leadership and innovation. Notably, during my tenure at Nyabu Investments, I played a pivotal role in directing research, development, finance, and procurement initiatives.\n\nIn addition to my roles within the traditional financial sector, my career trajectory took an exciting turn in 2020 as I immersed myself in the dynamic and rapidly evolving cryptocurrency landscape. Over the years, I have honed my expertise in trading assets across both centralized and decentralized platforms, solidifying my position as a trusted authority in the field.\n\nMy diverse experiences and unwavering commitment to operational excellence have consistently propelled me to drive innovation, optimize processes, and achieve outstanding results in both traditional and blockchain-based financial markets.",
  },
  {
    name: "Jeremy Mwangi,",
    role: "Director, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696234641/imgpsh_fullsize_anim_tpwg4r.jpg",

    description:
      "I am the Director at Eq.Cap and a Crypto Trader with a strong background in Markets Analysis, currently serving at the largest crypto hedge fund in East Africa. I hold a Bachelor of Science degree in Biosystems Engineering from the University of Nairobi, complemented by a Diploma in Project Management from the prestigious Kenya Institute of Management.\n\nMy professional journey has been enriched by valuable experiences at Kwakoo Group and G.North & Son Ltd, which have afforded me a profound understanding of cryptocurrency market analysis and design principles. My expertise extends to various facets of the crypto industry, including systems applications of decentralized blockchain technology.",
  },
  {
    name: "Amzad Hossen",
    role: "Crypto Trader and DeFi Analyst, Dubai",
    imageSrc:
      "https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg",

    description:
      "I am Amzad, a seasoned Crypto Trader and Market Analyst based in Dubai. With an intricate understanding of Cryptocurrency, Blockchain, Digital Assets, Web3, and Decentralized Finance (DeFi), I bring a holistic view of the evolving digital financial landscape. My specialization lies in dissecting market trends, synthesizing complex data, and identifying lucrative opportunities within the crypto domain. My data-driven approach, paired with my unwavering commitment to continuous learning, places me at the forefront of financial innovation. I am a proud alumnus of University Brunei Darussalam, holding a Bachelor's degree in Computer Science, and I continuously bridge the intersection of technology and finance in my analyses.",
  },
  {
    name: "Morris Mwita",
    role: "Financial Research Analyst, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696236335/imgpsh_fullsize_anim_1_ahmyr7.png",

    description:
      "I am a dynamic Financial Analyst known for delivering exceptional returns through strategic insights. An alumnus of Technical University of Kenya, holding a Bachelor’s degree in Economics. Passionate about financial markets and crypto landscapes.\n\nMy expertise in analyzing both traditional and cryptocurrency markets empowers me to identify lucrative opportunities and develop data-driven investment strategies. Work with a high-performing team in comprehensive research and analysis of global financial markets, including cryptocurrencies, equities, and commodities.\n\nI have a proven track record of conducting in-depth research into economic and market trends, as well as analyzing the performance of various industries and their correlation. My ability to synthesize this information helps organizations make well-informed financial strategies.\n\nEngage clients through captivating market insights and newsletters, amplifying brand reputation and fostering lasting partnerships.",
  },
  {
    name: "Tracy Tuti",
    role: "Crypto and forex Trader, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696239239/imgpsh_fullsize_anim_2_sneynk.png",

    description:
      "An esteemed University of Nairobi, Statistics graduate, I boasts over 3 years of deep immersion in crypto trading, blending rigorous academic insights with hands-on market strategy. Not just a theoretician. My practical expertise is evident in his adept navigation through crypto's most volatile wave. Serving as a beacon of expertise, wisdom, and guidance for other traders at all levels, from novices to seasoned professionals.\n\nMy multifaceted approach, rooted in both technical and fundamental analyses, has consistently yielded robust returns. This success, combined with my unwavering commitment to elevating the art of crypto trading, has firmly solidified my esteemed reputation in the ever-evolving digital asset realm.",
  },
  {
    name: "William Okwach",
    role: "Crypto Trader, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696240046/imgpsh_fullsize_anim_3_uz9yzc.png",

    description:
      "I am a crypto trading and market analysis specialist, EqCap. An alumnus of Zetech University with a Bachelor’s degree in Business Administration and Management (Finance). I command a nuanced understanding of the confluence between cutting-edge technology and modern finance.\n\nMy expertise lies in discerning and forecasting market trajectories within the cryptocurrency and forex sectors. Leveraging sophisticated data-driven techniques, I consistently engineer informed trading strategies that anticipate market flux. Committed to perceptual learning and financial mastery, I am poised to remain at the forefront of financial analytics and strategic investment.",
  },
  {
    name: "Adam Ongusi",
    role: "Research Analyst, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/c_thumb,w_200,g_face/v1696240608/imgpsh_fullsize_anim_4_x1b9zt.png",

    description:
      "Based in Nairobi, I specialize in financial analysis with a keen focus on market trends and cryptocurrency investments. Beyond my professional pursuits, I have a profound appreciation for technology and its transformative impact on our world.\n\nMy analytical acumen is complemented by a comprehensive understanding of the broader financial ecosystem, allowing me to provide insightful recommendations and strategies to stakeholders. I've honed my skills in data interpretation, ensuring that investment decisions are data-driven and aligned with market movements.\n\nMy interests extend to photography, capturing moments that resonate with the ever-evolving dynamics of the market. As an avid swimmer, I believe in maintaining a balance between mental agility and physical fitness. Additionally, I am a fervent football enthusiast, drawing parallels between the strategies on the field and in the financial world.",
  },
  {
    name: "Oishi Rani Bristy",
    role: "Crypto Analyst, Dhaka, Bangladesh",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696241110/imgpsh_fullsize_anim_5_lz2sgl.png",

    description:
      "I am a blockchain and crypto market specialist. A Computer Science and Engineering graduate of Daffodil International University. Harnessing a rich tapestry of analytical experience, I possess an intricate mastery of blockchain technology and its manifestation within the crypto markets. My extensive years dedicated to the scrupulous tracking of digital assets, rigorous research, and the identification of salient investment avenues have endowed me with a profound comprehension of the cryptocurrency ecosystem.\n\nI consistently furnish clients with nuanced, actionable intelligence, ensuring they remain strategically positioned in this dynamic industry. My methodology is underpinned by meticulous examination of whitepapers, keen analysis of market trajectories, and adept utilization of technical indicators. My foremost ambition is to champion the paradigm shift towards Decentralized Finance, recognizing its transformative potential as the future of financial systems.",
  },
  {
    name: "Mike Kinuthia",
    role: "Technical Analyst and Trader, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696242060/imgpsh_fullsize_anim_6_zoqxqb.png",

    description:
      "I am a technical analyst tactician and double up as a trader at EqCap, with a focused and impactful 3-year journey in the financial sector, I amalgamate quantitative acumen with deep-seated market insights. Expertly navigating the complexities of global financial markets, I am proficient in technical analysis, leveraging data-driven insights to consistently secure advantageous trading positions.\n\nArmed with meticulous research, a sharp eye for emerging trends, and an innate ability to anticipate market pulses, I am not just on the money – I like to be ahead of the curve.",
  },
  {
    name: "Stephen Gachanja",
    role: "Quant Trader and Consultant, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696242255/imgpsh_fullsize_anim_7_hw9wml.png",

    description:
      "I’m Stephen. I’m a Quant Trader living in Nairobi. I work with EQAM Capital as a quant trader, a consultant for Ngeni.io, and also write on trends in finance, specifically in trading. I dominantly trade currencies, but have portfolios in cryptocurrencies, indices, stocks, and commodities. I build strategies that trade the aforementioned in MQL4/5, and Python programming languages.\n\nI am a fan of entrepreneurship, programming, and fitness. I’m also interested in running and cycling.",
  },
  {
    name: "Rita Mueni",
    role: "Forex and Synthetics trader, Kenya",
    imageSrc:
      "https://res.cloudinary.com/dewnu3vpt/image/upload/v1696242463/imgpsh_fullsize_anim_8_s1zuy4.png",

    description:
      "I am a highly experienced Forex and Synthetics trader with a strong track record of success in global financial markets. With a background in Finance and ongoing professional development, I possess a deep understanding of currency pairs, trading strategies, and synthetics.\n\nMy trading approach is characterized by meticulous market analysis, disciplined risk management, and adaptability to changing conditions.\n\nI excel in high-pressure environments, making data-driven decisions and leveraging market psychology to my advantage.\n\nIn addition to my trading prowess, I am passionate about mentorship and responsible trading practices. I believe in transparency, integrity, and upholding professional standards.\n\nMy expertise in Forex and Synthetics trading, coupled with my commitment to excellence, positions me as a trusted professional in the industry, ready to deliver results and share knowledge with others.",
  },
];

const Team = () => {
  const {
    team_container,
    title,
    TeamMembers_Container,
    Members_Card,
    MemberCardImg,
    CardContent,
    MemberName_title,
    linkIcon,
    flipped,
    BackfaceContent,
  } = styles;

  const [isServer, setIsServer] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

  const flipCard = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((i) => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const resetCards = (index) => {
    setFlippedCards(flippedCards.filter((i) => i !== index));
  };

  useEffect(() => {
    setIsServer(true);
  }, []);

  if (!isServer) {
    return null;
  }
  return (
    <div className="ContainerWrapper">
      <div className={team_container}>
        <EQAMLogo />
        <div className={title}>Team</div>
        <p>
          <span>
            NGC Ventures is composed of experienced and reliable investment
            professionals with global vision and access to worldwide industry
            resources.
          </span>
          <span>
            We come from diverse backgrounds that include technology, finance,
            consulting and investment banking. Our extensive educational and
            professional experience benefits our portfolio companies with a
            wealth of valuable and relevant expertise.
          </span>
          <span>Click on a team member to learn more.</span>
        </p>
        <div className={TeamMembers_Container}>
          {members.map((member, index) => (
            <div
              className={`${Members_Card} ${
                flippedCards.includes(index) ? flipped : ""
              }`}
              key={index}
            >
              {flippedCards.includes(index) && (
                <div
                  className={BackfaceContent}
                  onClick={() => resetCards(index)}
                >
                  {member.description}
                </div>
              )}
              <div className={MemberCardImg}>
                <MemberImg src={member.imageSrc} alt={member.name} />
              </div>
              <div className={CardContent}>
                <div className={MemberName_title}>
                  <h1>{member.name}</h1>
                  <h2>{member.role}</h2>
                </div>

                <div className={linkIcon} onClick={() => flipCard(index)}>
                  <LinkIcon src="/Link.png" alt="#" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

Team.getLayout = function getLayout(page) {
  return (
    <HomeLayout showFooter={true} pageTitle={"Eqam capital | Team"}>
      {page}
    </HomeLayout>
  );
};

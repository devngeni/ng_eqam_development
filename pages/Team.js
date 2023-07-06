import Footer from "@/components/Footer/Footer";
import { LinkIcon, MemberImg } from "@/components/ImagesStyles";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/Team.module.css";
import { useEffect, useState } from "react";

// Array of member data
const members = [
  {
    name: "Roger Lim",
    role: "General Partner",
    imageSrc:
      "https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg",

    description:
      " specializes in researching blockchain mechanisms for generating decentralized consensus and real-world implications provided by blockchain. Jack’s invaluable presence at the company is defined by his abilities to analyze economic and social models behind projects, while also exploring game theoretic topics including: incentive provisions, industrial organization and market microstructure on blockchain and smart contracts. In particular, Jack helps NGC's portfolio companies with research in the economics of information and cloud computing.",
  },
  {
    name: "Roger Lim",
    role: "General Partner",
    imageSrc:
      "https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg",

    description:
      " specializes in researching blockchain mechanisms for generating decentralized consensus and real-world implications provided by blockchain. Jack’s invaluable presence at the company is defined by his abilities to analyze economic and social models behind projects, while also exploring game theoretic topics including: incentive provisions, industrial organization and market microstructure on blockchain and smart contracts. In particular, Jack helps NGC's portfolio companies with research in the economics of information and cloud computing.",
  },
  {
    name: "Roger Lim",
    role: "General Partner",
    imageSrc:
      "https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg",

    description:
      " specializes in researching blockchain mechanisms for generating decentralized consensus and real-world implications provided by blockchain. Jack’s invaluable presence at the company is defined by his abilities to analyze economic and social models behind projects, while also exploring game theoretic topics including: incentive provisions, industrial organization and market microstructure on blockchain and smart contracts. In particular, Jack helps NGC's portfolio companies with research in the economics of information and cloud computing.",
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
    <>
      <Navbar />
      <div className="ContainerWrapper">
        <div className={team_container}>
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
        <Footer />
      </div>
    </>
  );
};

export default Team;

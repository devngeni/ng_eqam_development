import Footer from "@/components/Footer/Footer";
import { MemberImg } from "@/components/ImagesStyles";
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/Team.module.css";
import { useEffect, useState } from "react";

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
  } = styles;

  const [isServer, setIsServer] = useState(false);

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
            <div className={Members_Card}>
              <div className={MemberCardImg}>
                <MemberImg
                  src="https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg"
                  alt="Member.name"
                />
              </div>
              <div className={CardContent}>
                <div className={MemberName_title}>
                  <h1>Roger Lim</h1>
                  <h2>General Partner</h2>
                </div>
                <div className={linkIcon}>#</div>
              </div>
            </div>
            <div className={Members_Card}>
              <div className={MemberCardImg}>
                <MemberImg
                  src="https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg"
                  alt="Member.name"
                />
              </div>
              <div className={CardContent}>
                <div className={MemberName_title}>
                  <h1>Roger Lim</h1>
                  <h2>General Partner</h2>
                </div>
                <div className={linkIcon}>#</div>
              </div>
            </div>
            <div className={Members_Card}>
              <div className={MemberCardImg}>
                <MemberImg
                  src="https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg"
                  alt="Member.name"
                />
              </div>
              <div className={CardContent}>
                <div className={MemberName_title}>
                  <h1>Roger Lim</h1>
                  <h2>General Partner</h2>
                </div>
                <div className={linkIcon}>#</div>
              </div>
            </div>
            <div className={Members_Card}>
              <div className={MemberCardImg}>
                <MemberImg
                  src="https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg"
                  alt="Member.name"
                />
              </div>
              <div className={CardContent}>
                <div className={MemberName_title}>
                  <h1>Roger Lim</h1>
                  <h2>General Partner</h2>
                </div>
                <div className={linkIcon}>#</div>
              </div>
            </div>
            <div className={Members_Card}>
              <div className={MemberCardImg}>
                <MemberImg
                  src="https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg"
                  alt="Member.name"
                />
              </div>
              <div className={CardContent}>
                <div className={MemberName_title}>
                  <h1>Roger Lim</h1>
                  <h2>General Partner</h2>
                </div>
                <div className={linkIcon}>#</div>
              </div>
            </div>
            <div className={Members_Card}>
              <div className={MemberCardImg}>
                <MemberImg
                  src="https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg"
                  alt="Member.name"
                />
              </div>
              <div className={CardContent}>
                <div className={MemberName_title}>
                  <h1>Roger Lim</h1>
                  <h2>General Partner</h2>
                </div>
                <div className={linkIcon}>#</div>
              </div>
            </div>
            <div className={Members_Card}>
              <div className={MemberCardImg}>
                <MemberImg
                  src="https://i.pinimg.com/236x/38/1e/c0/381ec006034984c22f0db62451b10e67.jpg"
                  alt="Member.name"
                />
              </div>
              <div className={CardContent}>
                <div className={MemberName_title}>
                  <h1>Roger Lim</h1>
                  <h2>General Partner</h2>
                </div>
                <div className={linkIcon}>#</div>
              </div>
            </div>
            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Team;

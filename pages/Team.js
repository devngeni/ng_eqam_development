import Navbar from "@/components/Navbar/Navbar";
import styles from "@/styles/Team.module.css";

const Team = () => {
  const { team_container } = styles;
  return (
    <>
      <Navbar />
      <div className={team_container}></div>
    </>
  );
};

export default Team;

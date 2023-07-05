import { useEffect, useRef } from "react";
import styles from "./Start.module.css";
import Typed from "typed.js";

const TypedMessage = ({ text }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: [text],
      typeSpeed: 90,
    });

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <h1 ref={elRef} />;
};

const Start = () => {
  const { StartPage } = styles;
  return (
    <div className={StartPage}>
      <TypedMessage
        text="We back visionary teams building the next generation of decentralized
        technologies"
      />
    </div>
  );
};

export default Start;

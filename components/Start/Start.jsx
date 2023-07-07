import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Logo } from "../ImagesStyles";
import styles from "./Start.module.css";

const { StartPage, EqamLogo, textWrapper } = styles;

// Component for displaying a typed message
const TypedMessage = ({ text }) => {
  const elRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js with the provided text
    const typed = new Typed(elRef.current, {
      strings: [text],
      typeSpeed: 90,
      showCursor: false,
    });

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, [text]);

  return <h1 ref={elRef} />;
};

// Component for displaying the EQAM logo
export const EQAMLogo = () => {
  const [isServer, setIsServer] = useState(false);

  useEffect(() => {
    setIsServer(true);
  }, []);
  if (!isServer) {
    return null;
  }
  return (
    <div className={EqamLogo}>
      <Logo src="/EQLogo.png" alt="EQAM Logo" />
    </div>
  );
};

// Start component
const Start = () => {
  const [isServer, setIsServer] = useState(false);

  useEffect(() => {
    setIsServer(true);
  }, []);

  if (!isServer) {
    return null;
  }

  return (
    <div className={StartPage}>
      <EQAMLogo />
      <div className={textWrapper}>
        {/* Display the typed message */}
        <TypedMessage text="We back visionary teams building the next generation of decentralized technologies" />
      </div>
    </div>
  );
};

export default Start;

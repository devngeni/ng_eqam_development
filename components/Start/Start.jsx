import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Logo } from "../ImagesStyles";
import styles from "./Start.module.css";

const { StartPage, EqamLogo, textWrapper } = styles;

const TypedMessage = ({ text }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: [text],
      typeSpeed: 90,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [text]);

  return <h1 ref={elRef} />;
};

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
        <TypedMessage text="Empowering Your Digital Wealth Journey - Trade Crypto, Traverse Continents!" />
      </div>
    </div>
  );
};

export default Start;

import Head from "next/head";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { Logo } from "../EqamLogo";
import { useEffect, useState } from "react";

const navigationItems = [
  { path: "/About", label: "ABOUT EQAM" },
  { path: "/Team", label: "TEAM" },
  { path: "/Portfolio", label: "PORTFOLIO" },
  { path: "/Research", label: "RESEARCH" },
  { path: "/ContactUs", label: "CONTACT US" },
  { path: "/Jobs", label: "JOBS" },
];

const HeadMetaData = () => {
  // const router = useRouter();
  return (
    <Head>
      <title>Eq_eqam_Development </title>
      <meta
        name="description"
        content="Building the Future of Web3 Technology in East Africa and Beyond"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

const Navbar = () => {
  const router = useRouter();
  const isActivePath = (path) => {
    return router.pathname === path;
  };

  const NavigateTopath = (path) => {
    router.push(path);
  };

  const { NavContainer, Nav, navButton, active } = styles;

  const [isServer, setIsServer] = useState(false);

  useEffect(() => {
    setIsServer(true);
  }, []);

  if (!isServer) {
    return null;
  }

  return (
    <>
      <HeadMetaData />
      <div className={NavContainer}>
        <div className={Nav}>
          <Logo
            src="/EQLogo.png"
            alt="EQ Logo"
            onClick={() => NavigateTopath("/")}
          />
          {navigationItems.map((item) => (
            <button
              key={item.path}
              className={`${navButton} ${
                isActivePath(item.path) ? active : ""
              }`}
              onClick={() => NavigateTopath(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

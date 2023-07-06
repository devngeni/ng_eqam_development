import Head from "next/head";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { Logo } from "../EqamLogo";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useOutsideClick from "@/Helpers/CloseModal";

const navigationItems = [
  { path: "/", label: "HOME" },
  { path: "/About", label: "ABOUT EQAM" },
  { path: "/Team", label: "TEAM" },
  { path: "/Portfolio", label: "PORTFOLIO" },
  { path: "/Resources", label: "RESOURCES" },
  { path: "/ContactUs", label: "CONTACT US" },
  { path: "/Jobs", label: "JOBS" },
];

const HeadMetaData = () => {
  const router = useRouter();
  const pageTitle = `EQAM Capital | ${router.pathname.replace("/", "")}`;
  return (
    <Head>
      <title>{pageTitle} </title>
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

  const {
    NavContainer,
    Nav,
    navButton,
    active,
    NavMenuIcon,
    NavMobile,
    mobile_menu_arrow,
  } = styles;

  const [isOpen, setIsOpen] = useState(false);
  const [isServer, setIsServer] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const modalContainerRef = useOutsideClick(toggleMobileMenu);

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
          {navigationItems.slice(1, 7).map((item, index) => (
            <button
              key={index}
              className={`${navButton} ${
                isActivePath(item.path) ? active : ""
              }`}
              onClick={() => NavigateTopath(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className={NavMenuIcon} onClick={toggleMobileMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        {isOpen && (
          <div className={NavMobile} ref={modalContainerRef}>
            <div className={mobile_menu_arrow} />
            {navigationItems.map((item, index) => (
              <div key={index}>
                <h3 onClick={() => NavigateTopath(item.path)}>{item.label}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

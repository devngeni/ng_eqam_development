import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { Logo } from "../ImagesStyles";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useOutsideClick from "@/Helpers/CloseModal";
import HeadMetaData from "../HeadMetaData";

const navigationItems = [
  { path: "/", label: "HOME" },
  { path: "/About", label: "ABOUT EQAM" },
  { path: "/Team", label: "TEAM" },
  { path: "/Portfolio", label: "PORTFOLIO" },
  { path: "/Resources", label: "RESOURCES" },
  { path: "/ContactUs", label: "CONTACT US" },
  { path: "/Jobs", label: "JOBS" },
];

const {
  NavContainer,
  Nav,
  navButton,
  active,
  NavMenuIcon,
  NavMobile,
  mobile_menu_arrow,
} = styles;

const Navbar = () => {
  const router = useRouter();

  // Check if the current path is active
  const isActivePath = (path) => {
    return router.pathname === path;
  };

  // Navigate to a specific path
  const NavigateToPath = (path) => {
    router.push(path);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isServer, setIsServer] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Reference for handling clicks outside the mobile menu
  const modalContainerRef = useOutsideClick(toggleMobileMenu);

  useEffect(() => {
    setIsServer(true);
  }, []);

  if (!isServer) {
    return null;
  }

  return (
    <>
    <HeadMetaData/>
      <div className={NavContainer}>
        <div className={Nav}>
          {/* Logo */}
          <Logo
            src="/EQLogo.png"
            alt="EQ Logo"
            onClick={() => NavigateToPath("/")}
          />

          {/* Navigation buttons */}
          {navigationItems.slice(1, 7).map((item, index) => (
            <button
              key={index}
              className={`${navButton} ${
                isActivePath(item.path) ? active : ""
              }`}
              onClick={() => NavigateToPath(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className={NavMenuIcon} onClick={toggleMobileMenu}>
          {/* Menu Icon */}
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        {isOpen && (
          <div className={NavMobile} ref={modalContainerRef}>
            <div className={mobile_menu_arrow} />

            {/* Mobile Navigation */}
            {navigationItems.map((item, index) => (
              <div key={index}>
                <h3 onClick={() => NavigateToPath(item.path)}>{item.label}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

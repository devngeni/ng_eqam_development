import Head from "next/head";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { Logo } from "./Image";

const navigationItems = [
  { path: "/aboutEq", label: "ABOUT EQAM" },
  { path: "/team", label: "TEAM" },
  { path: "/portfolio", label: "PORTFOLIO" },
  { path: "/research", label: "RESEARCH" },
  { path: "/contact", label: "CONTACT US" },
  { path: "/jobs", label: "JOBS" },
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

  const { NavContainer, Nav, navButton, active } = styles;

  return (
    <>
      <HeadMetaData />
      <div className={NavContainer}>
        <div className={Nav}>
          <Logo src="/EQLogo.png" alt="EQ Logo" />
          {navigationItems.map((item) => (
            <button
              key={item.path}
              className={`${navButton} ${
                isActivePath(item.path) ? active : ""
              }`}
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

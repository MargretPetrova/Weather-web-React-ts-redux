import { FC, useState } from "react";
import styles from "./Header.module.css";
import Container from "../Common/Container/Container";
import NavList from "./components/NavList/NavList";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const onToggleHandler = (e: any) => {
    setMobileNav(!mobileNav);
  };
  
  return (
    <div className={styles["site-header"]}>
      <Container>
        <a href="/" className={styles["branding"]}>
          <img src="images/logo.png" alt="" className={styles["logo"]} />
          <div className={styles["logo-type"]}>
            <h1 className={styles["site-title"]}>Get the weather</h1>
            <small className={styles["site-description"]}>
              Margret Petrova
            </small>
          </div>
        </a>
        <div className={styles["main-navigation"]}>
          <button
            type="button"
            className={styles["menu-toggle"]}
            onClick={onToggleHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1"
                x1="12.066"
                x2="34.891"
                y1=".066"
                y2="22.891"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".237" stop-color="#3bc9f3"></stop>
                <stop offset=".85" stop-color="#1591d8"></stop>
              </linearGradient>
              <path
                fill="url(#9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1)"
                d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"
              ></path>
              <linearGradient
                id="9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2"
                x1="12.066"
                x2="34.891"
                y1="12.066"
                y2="34.891"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".237" stop-color="#3bc9f3"></stop>
                <stop offset=".85" stop-color="#1591d8"></stop>
              </linearGradient>
              <path
                fill="url(#9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2)"
                d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"
              ></path>
              <linearGradient
                id="9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3"
                x1="12.066"
                x2="34.891"
                y1="24.066"
                y2="46.891"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".237" stop-color="#3bc9f3"></stop>
                <stop offset=".85" stop-color="#1591d8"></stop>
              </linearGradient>
              <path
                fill="url(#9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3)"
                d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"
              ></path>
            </svg>
          </button>
          <NavList classDiv="menu" />
        </div>
        </Container>
        <Container>
        {mobileNav && (
          <div className={styles["mobile-navigation"]}>
            <NavList classDiv="menu-m" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;

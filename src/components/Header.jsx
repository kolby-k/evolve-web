// Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.css";
import evolveLogo from "../assets/evolve_logo.png";
import utlils from "../utlils";

function Header({ buttonLabels }) {
  const activeScreen = useLocation().pathname;

  return (
    <header id={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to={"/"}>
            <img src={evolveLogo} className="logo" alt="Evolve logo" />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {buttonLabels.map((label) => {
              const path = label === "home" ? "/" : `/${label}`;
              return (
                <li key={label}>
                  <Link
                    to={path}
                    className={styles.link}
                    style={
                      path === activeScreen
                        ? { color: "#ffffff" }
                        : { color: "#b9b9b9" }
                    }
                  >
                    {utlils.proper(label)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

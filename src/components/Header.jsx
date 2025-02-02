// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import evolveLogo from "../assets/evolve_logo.png";
import utlils from "../utlils";

function Header({ buttonLabels }) {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <a href="https://kolby-k.netlify.app/" target="_blank">
            <img src={evolveLogo} className="logo" alt="Evolve logo" />
          </a>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {buttonLabels.map((label) => {
              const path = label === "home" ? "/" : `/${label}`;
              return (
                <li key={label}>
                  <Link to={path} className={styles.link}>
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

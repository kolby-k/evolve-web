import React from "react";
import evolveLogo from "../assets/evolve_logo.png";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a href="https://kolby-k.netlify.app/" target="_blank">
          <img src={evolveLogo} className="logo" alt="Evolve logo" />
        </a>
        <div className={styles.card}>
          <h1 className={styles.companyName}>Evolve Workout Tracker</h1>
          <p className={styles.slogan}>Achieve More with Every Workout</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

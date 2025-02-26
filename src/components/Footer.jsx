import React from "react";
import evolveLogo from "../assets/evolve_logo.png";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <Link to={"/"}>
          <img src={evolveLogo} className="logo" alt="Evolve logo" />
        </Link>
        <div className={styles.card}>
          <h1 className={styles.companyName}>Evolve Workout Tracker</h1>
          <p className={styles.slogan}>Achieve More with Every Workout</p>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <Link to={"/privacy"}>Privacy Policy</Link>

        <Link to={"/privacy"}>Terms of Service</Link>
      </div>
    </div>
  );
}

export default Footer;

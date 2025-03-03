import React from "react";
import evolveLogo from "../assets/evolve_logo.png";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import AppStoreIcon from "./AppStoreIcon";

const COPYRIGHT_YEAR = 2025;

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.topRow}>
        <Link to={"/"}>
          <img src={evolveLogo} className="logo" alt="Evolve logo" />
        </Link>
        <h1 className={styles.companyName}>Evolve Workout Tracker</h1>
        <p className={styles.slogan}>Achieve More with Every Workout</p>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.resourceContainer}>
          <div className={styles.linkContainer}>
            <h3 className={styles.heading}>Resources</h3>
            <Link to={"/"}>Home</Link>
            <Link to={"/pricing"}>Pricing</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/download"}>Download</Link>
            <a href="mailto:support@evolve-app.ca?subject=Support%20Request">
              Contact
            </a>
            {/*           <Link to={"/"}>Help Center</Link> */}
          </div>
          <AppStoreIcon />
        </div>
        <div className={styles.policyContainer}>
          <Link to={"/privacy"} className="policy-link">
            Privacy Policy
          </Link>

          <Link to={"/terms-of-service"} className="policy-link">
            Terms of Service
          </Link>
        </div>
        <p id="copyright">
          Copyright © {COPYRIGHT_YEAR} Kolby Klassen. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

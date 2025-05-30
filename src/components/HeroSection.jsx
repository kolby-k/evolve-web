import React from "react";
import WELCOME_SCREEN from "../assets/mockups/Welcome.webp";
import styles from "../styles/Hero.module.css";
import DownloadButton from "./DownloadButton";

function HeroSection() {
  return (
    <div className={styles.bg}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeftContainer}>
          <h1>Evolve</h1>
          <h2> Workout Tracker </h2>
          <p>Achieve More with Every Workout</p>
          <DownloadButton styles={styles.button} />
        </div>
        <div className={styles.heroRightContainer}>
          <img
            src={WELCOME_SCREEN}
            className={styles.heroImage}
            alt="App Mockup"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

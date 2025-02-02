import React from "react";
import MOCKUP_WELCOME from "../assets/mockups/Welcome Screen.png";
import styles from "../styles/Home.module.css";

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftSide}>
        <img
          src={MOCKUP_WELCOME}
          className={styles.featureImage}
          alt="App Mockup"
        />
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>Evolve</h2>
        <h3 className={styles.smallTitle}> Workout Tracker </h3>
        <p className={styles.slogan}>Achieve More with Every Workout</p>
        <span className={styles.buttonContainer}>
          <button className={styles.button}>Download Now</button>
        </span>
      </div>
    </div>
  );
}

export default HeroSection;

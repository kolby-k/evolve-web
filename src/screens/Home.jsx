import React from "react";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import EvolveDescription from "../components/EvolveDescription";

function HomeContent() {
  return (
    <div className={styles.homeContent}>
      <HeroSection />
      <EvolveDescription />
    </div>
  );
}

export default HomeContent;

import React from "react";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import EvolveDescription from "../components/EvolveDescription";
import ReviewSection from "../components/ReviewSection";
import FeatureSection from "../components/FeatureSection";

function HomeContent() {
  return (
    <div className={styles.homeContent}>
      <HeroSection />
      <EvolveDescription />
      <ReviewSection />
      <FeatureSection />
    </div>
  );
}

export default HomeContent;

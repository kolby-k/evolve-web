import React from "react";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import EvolveDescription from "../components/EvolveDescription";
import ReviewSection from "../components/ReviewSection";
import FeatureSection from "../components/FeatureSection";
import FAQ from "../components/FAQ";

function HomeContent() {
  return (
    <div className={styles.homeContent}>
      <HeroSection />
      <EvolveDescription />
      <ReviewSection />
      <FeatureSection />
      <FAQ />
    </div>
  );
}

export default HomeContent;

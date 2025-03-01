import React from "react";
import HeroSection from "../components/HeroSection";
import EvolveDescription from "../components/EvolveDescription";
import ReviewSection from "../components/ReviewSection";
import FeatureSection from "../components/FeatureSection";
import FAQ from "../components/FAQ";
import styles from "../styles/Home.module.css";
import useScrollToTop from "../hooks/useScrollToTop";

function HomeContent() {
  useScrollToTop();

  return (
    <div id={styles.homeScreen}>
      <HeroSection />
      <EvolveDescription />
      <ReviewSection />
      <FeatureSection />
      <FAQ />
    </div>
  );
}

export default HomeContent;

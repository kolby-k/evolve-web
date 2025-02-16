import React from "react";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import EvolveDescription from "../components/EvolveDescription";
import ReviewSection from "../components/ReviewSection";
import FeatureSection from "../components/FeatureSection";
import FAQ from "../components/FAQ";

function HomeContent() {
  return (
    <>
      <HeroSection />
      <EvolveDescription />
      <ReviewSection />
      <FeatureSection />
      <FAQ />
    </>
  );
}

export default HomeContent;

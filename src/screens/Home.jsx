import React from "react";
import HeroSection from "../components/HeroSection";
import EvolveDescription from "../components/EvolveDescription";
import ReviewSection from "../components/ReviewSection";
import FeatureSection from "../components/FeatureSection";
import FAQ from "../components/FAQ";
import useScrollToTop from "../hooks/useScrollToTop";

function HomeContent() {
  useScrollToTop();

  return (
    <div>
      <HeroSection />
      <EvolveDescription />
      <ReviewSection />
      <FeatureSection />
      <FAQ />
    </div>
  );
}

export default HomeContent;

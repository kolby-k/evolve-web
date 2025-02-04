import React from "react";
import styles from "../styles/Features.module.css";
import Feature from "./Feature";

const FEATURES = [
  {
    title: "Visualize Your Progress",
    description: [
      "All of your workouts in one place",
      "Insight into each exercise, set, and rep",
      "See your progress to keep motivated",
    ],
    imageSource: "/src/assets/mockups/History Screen.png",
    imageStyle: { height: "45em", width: "auto" },
  },
  {
    title: "Endless Exercise Library",
    description: [
      "Over 250 exercises with video demos and instructions",
      "Discover new exercises or stick with your favorites",
      "Add your own custom exercises anytime",
    ],
    imageSource: "/src/assets/mockups/Exercises Screen.png",
    imageStyle: { height: "50em", width: "auto" },
  },
  {
    title: "Easy, Effortless Tracking",
    description: [
      "Track every rep in real time",
      "Save your own workout templates",
      "Review your results with helpful insights",
    ],
    imageSource: "/src/assets/mockups/Tracking Screen.png",
    imageStyle: { height: "50em", width: "auto" },
  },
];

function FeatureSection() {
  return (
    <div className={styles.featureSection}>
      {FEATURES.map((feature, index) => {
        const layoutType = index % 2 === 0 ? "right" : "left";

        return <Feature content={feature} layout={layoutType} />;
      })}
    </div>
  );
}

export default FeatureSection;

import React from "react";
import styles from "../styles/Features.module.css";
import Feature from "./Feature";
import TrackingScreen from "../assets/mockups/Tracking.webp";
import ExercisesScreen from "../assets/mockups/Exercises.webp";
import HistoryScreen from "../assets/mockups/History.webp";

const FEATURES = [
  {
    title: "Easy, Effortless Tracking",
    description: [
      "Track every rep in real time",
      "Built-in rest timer to stay on pace",
      "Save your own custom workout templates",
    ],
    imageSource: TrackingScreen,
  },
  {
    title: "Endless Exercise Library",
    description: [
      "Explore over 250+ exercises",
      "Master your technique with video demos",
      "Create your own exercises",
    ],
    imageSource: ExercisesScreen,
  },
  {
    title: "Visualize Your Progress",
    description: [
      "View your workout history in detail",
      "Gain insight into every set and rep performed",
      "Stay motivated and progress towards your goals",
    ],
    imageSource: HistoryScreen,
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

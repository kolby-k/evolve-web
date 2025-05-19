import React from "react";
import styles from "../styles/Features.module.css";
import Feature from "./Feature";
import TrackingScreen from "../assets/mockups/Tracking.png";
import ExercisesScreen from "../assets/mockups/Exercises.png";
import HistoryScreen from "../assets/mockups/History.png";
import SingleTrackingScreen from "../assets/mockups/single-tracking.png";
import SingleHistorycreen from "../assets/mockups/single-history.png";
import SingleExerciseScreen from "../assets/mockups/single-exercise.png";

const FEATURES = [
  {
    title: "Easy, Effortless Tracking",
    description: [
      "Track every workout in real time",
      "Built-in rest timer",
      "Create your own custom workout templates",
    ],
    imageSource: TrackingScreen,
    secondarySource: SingleTrackingScreen,
  },
  {
    title: "Visualize Your Progress",
    description: [
      "View your workout history in detail",
      "Get insights into every set you've performed",
      "Stay motivated to keep progressing",
    ],
    imageSource: HistoryScreen,
    secondarySource: SingleHistorycreen,
  },
  {
    title: "Endless Exercise Library",
    description: [
      "Explore over 250+ exercises",
      "Master your technique with video demos",
      "Add your own custom exercises",
    ],
    imageSource: ExercisesScreen,
    secondarySource: SingleExerciseScreen,
  },
];

function FeatureSection() {
  return (
    <div className={styles.featureSection}>
      <div className={styles.featureTitle}>Features</div>
      {FEATURES.map((feature, index) => {
        const layoutType = index % 2 === 0 ? "right" : "left";
        return (
          <Feature
            key={index}
            content={feature}
            layout={layoutType}
            idx={index}
            styles={styles}
          />
        );
      })}
    </div>
  );
}

export default FeatureSection;

import React from "react";
import styles from "../styles/Home.module.css";

function EvolveDescription() {
  return (
    <div className={styles.descriptionContainer}>
      <h3 className={styles.heading}>Evolve - Your Ultimate Gym Companion</h3>
      <p className={styles.description}>
        Achieve your fitness goals with ease using Evolve. Track every rep in
        real time, review your complete workout history with detailed insights,
        and confidently build on your progress. Save your favorite workouts as
        templates for quick repetition, and explore a diverse library of over
        250 exercises to keep your routine fresh and engaging.
      </p>
    </div>
  );
}

export default EvolveDescription;

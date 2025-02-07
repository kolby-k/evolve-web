import React from "react";
import styles from "../styles/Home.module.css";
import { FaStar } from "react-icons/fa";

const REVIEWS = [
  {
    content:
      "Evolve has completely transformed my training routine. Tracking my progress in real time and having detailed insights after each session keeps me motivated every day.",
    name: "Jimbo Jones",
  },
  {
    content:
      "I love the workout templates feature! Saving my favorite routines and being able to adjust them on the fly means I can always push my limits without starting from scratch.",
    name: "Samantha Reed",
  },
  {
    content:
      "Evolve has an amazing exercise library, and I love it! With so many options to choose from, my workouts are never boring or repetitive.",
    name: "Alex Garcia",
  },
];

function ReviewSection() {
  return (
    <div className={styles.reviewSection}>
      <h2 className={styles.title}>The Number 1 Workout Tracking App</h2>
      <div className={styles.starContainer}>
        <FaStar size={32} color="yellow" />
        <FaStar size={32} color="yellow" />
        <FaStar size={32} color="yellow" />
        <FaStar size={32} color="yellow" />
        <FaStar size={32} color="yellow" />
      </div>
      <div className={styles.reviewContainer}>
        {REVIEWS.map((review, index) => {
          return (
            <span key={index} className={styles.review}>
              <p className={styles.reviewContent}>{review.content}</p>
              <h5 className={styles.reviewName}>- {review.name}</h5>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewSection;

import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import styles from "../styles/Download.module.css";
import DownloadButton from "../components/DownloadButton";

function Download() {
  useScrollToTop();

  const reviewsData = [
    {
      title: "The best workout app ever!",
      text: "Evolve is so helpful, I can't imagine working out without it!",
      author: "Jimbo Jones",
    },
    {
      title: "Transformed my workouts!",
      text: "Evolve's tracking is intuitive and effective, love it!",
      author: "Sarah Miller",
    },
    {
      title: "A must-have for fitness enthusiasts",
      text: "The app makes tracking progress so simple and fun.",
      author: "Mike Davis",
    },
    {
      title: "Impressive design and features",
      text: "It really stands out from other workout apps I've used.",
      author: "Emma Wilson",
    },
  ];

  return (
    <div className={styles.screen}>
      <h1>Get Evolve Today</h1>
      <p>
        Download <strong>Evolve Workout Tracker</strong> for free on the Apple
        App Store!
      </p>

      <DownloadButton styles={styles.button} />

      <h3>See What Others Are Saying:</h3>
      <div className={styles.reviews}>
        {reviewsData.map((review, index) => (
          <div key={index} className={styles.card}>
            <h2>{review.title}</h2>
            <p>{review.text}</p>
            <span>- {review.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Download;

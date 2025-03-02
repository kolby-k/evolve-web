import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import styles from "../styles/About.module.css";

function About() {
  useScrollToTop();

  return (
    <div className={styles.screen}>
      <h1>About</h1>
      <span className={styles.description}>
        Evolve is a mobile workout tracker designed to help athletes stay
        consistent and reach their weightlifting goals.
      </span>

      <section>
        <h2>My Story</h2>
        <p>
          I’ve always believed that progress is built on consistency, but
          without tracking, it’s easy to lose sight of how far you’ve come. This
          belief shaped Evolve’s design—an intuitive app that makes it simple to
          log workouts, review past performances, and stay motivated by seeing
          tangible improvements over time.
        </p>
        <p>
          Evolve isn’t just a workout tracker—it’s a tool that helps you build
          momentum and push past plateaus.
        </p>
      </section>

      <section>
        <h2>My Mission</h2>
        <p>
          My goal with Evolve is simple: to provide athletes with a powerful yet
          easy-to-use tool that keeps them motivated and progressing. By using
          Evolve, you can expect:
        </p>
        <ul>
          <li>
            <strong>Effortless Workout Logging:</strong> Quickly start logging a
            workout and capture key details without disrupting your training
            flow.
          </li>
          <li>
            <strong>Intuitive Progress Tracking:</strong> Learn from your
            workouts with meaningful insights and relevant analytics.
          </li>
          <li>
            <strong>Secure and Reliable:</strong> Ensuring your workout history
            is safely stored and always accessible.
          </li>
        </ul>
      </section>

      <p>
        Join me and the growing Evolve community—start tracking your workouts
        today, for free!
      </p>
    </div>
  );
}

export default About;

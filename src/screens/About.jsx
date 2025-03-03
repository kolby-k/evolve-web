import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import styles from "../styles/About.module.css";
import Kolby from "../assets/kolby-bg-t.png";
import DownloadButton from "../components/DownloadButton";

function About() {
  useScrollToTop();

  return (
    <div className={styles.screen}>
      <h1>Welcome to Evolve</h1>
      <span className={styles.description}>
        Evolve is a mobile workout tracker designed to support high-performing
        athletes in staying consistent and reaching their weightlifting goals.
      </span>
      <section className={styles.myStory}>
        <div>
          <h2>About Me</h2>
          <p>
            I'm Kolby, the founder and developer behind Evolve Workout Tracker.
            Over the years working out, I've learned that the secret to progress
            revolves around consistency. Yet without measuring progress, it's
            easy to lose sight of just how far you've come.
          </p>
          <p>
            This belief inspired the creation of Evolve—a simple, intuitive app
            designed to track your workouts, review past performance, and
            highlight your tangible improvements over time.
          </p>
          <p>
            What began as a tool for my personal training program quickly grew
            into something more. Evolve isn’t merely a workout tracker; it’s a
            partner that helps you build momentum, overcome plateaus, and
            celebrate every step of your fitness journey.
          </p>
        </div>
        <img src={Kolby} className={styles.profileImage}></img>
      </section>
      <section className={styles.mission}>
        <h2>My Mission</h2>
        <p>
          My goal with Evolve is to provide athletes with a powerful and
          easy-to-use tool that keeps them motivated and progressing in the gym.
          By using Evolve, you can expect:
        </p>
        <span className={styles.banner}>
          <ul>
            <li>
              <strong>Effortless Workout Logging</strong> Quickly log your
              workout and capture key details without disrupting your training
              flow.
            </li>
            <li>
              <strong>Progress Tracking & Insights</strong> View your workout
              history and gain meaningful insights along with relevant
              analytics.
            </li>
            <li>
              <strong>Secure and Reliable</strong> Rest assured that your
              workout history is safely stored and always accessible.
            </li>
          </ul>
        </span>
      </section>

      <span className={styles.promoText}>
        Join me and the growing Evolve community today— start tracking your
        workouts for free!
      </span>
      <DownloadButton styles={styles.button} />
    </div>
  );
}

export default About;

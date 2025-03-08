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
        Evolve is a mobile workout tracker designed to help athletes of all
        levels track their progress in the gym, stay motivated, and achieve
        their weightlifting goals.
      </span>
      <section className={styles.myStory}>
        <div>
          <h2>About Me</h2>
          <p>Hey! I’m Kolby, the developer behind Evolve Workout Tracker. </p>
          <p>
            I developed Evolve because I wanted an effective and convenient way
            to track my workouts. I also saw it as a fun personal challenge to
            build something useful from scratch. My goal was to create an app
            that would help people easily track their progress at the gym and
            improve their weightlifting performance.
          </p>
          <p>
            Before creating Evolve, I tried several different methods to log my
            workouts, including notebooks, spreadsheets, my phone’s notes app,
            and various workout-tracking apps. But none of these options
            completely met my needs. I wanted a solution that was
            straightforward to use during my workouts and provided clear
            feedback on my progress.
          </p>
          <p>
            That's what inspired me to build Evolve. It's designed to simplify
            workout tracking, allowing you to focus on improving your
            performance. With just one tap, you can launch a workout with
            exercises already set up, quickly log your reps and weights, and
            instantly review your results.
          </p>
          <p>I’d love for you to try Evolve!</p>
        </div>
        <img src={Kolby} className={styles.profileImage}></img>
      </section>
      <section className={styles.mission}>
        <span className={styles.banner}>
          <ul>
            <li>
              <strong>Effortless Workout Logging</strong> Quickly log your
              workout and capture key details without interrupting your training
              flow.
            </li>
            <li>
              <strong>Progress Tracking & Insights</strong> Easily view your
              workout history and get meaningful insights along with relevant
              analytics.
            </li>
            <li>
              <strong>Discover New Exercises</strong> Explore hundreds of
              exercises in the library, or create your own to customize your
              routine.
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

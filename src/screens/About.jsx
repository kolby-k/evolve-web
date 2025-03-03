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
        Evolve is a mobile workout tracker designed to support athletes in
        staying consistent and reaching their weightlifting goals.
      </span>
      <section className={styles.myStory}>
        <div>
          <h2>About Me</h2>
          <p>
            Hey! I’m Kolby, the developer behind Evolve Workout Tracker. As
            someone interested in both fitness and software development, I
            created Evolve to solve a challenge I faced- tracking my progress in
            the gym in a way that was practical and could actually add value to
            my existing routine.
          </p>
          <p>
            Over the years, I tried everything: notebooks, spreadsheets, my
            phone’s notes app, and various workout tracking apps. But none of
            them quite worked the way I needed. I wanted something simple,
            flexible, and affordable—an app that fit my training style while
            actually helping me track progress effectively.
          </p>
          <p>
            That’s why I built Evolve. It’s designed to make workout tracking
            effortless, so you can focus on what really matters—your progress.
            With just a tap, you can start a workout with your exercises already
            set up, quickly log your reps and weight, and instantly review your
            performance.
          </p>
          <p>
            What started as a curious idea turned into something bigger—a
            valuable solution for anyone looking to take their training to the
            next level. I’d love for you to give Evolve a try!
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

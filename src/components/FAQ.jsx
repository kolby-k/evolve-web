import React, { useState } from "react";
import styles from "../styles/FAQ.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Q_AND_A = [
  {
    question: "How do I create an account?",
    answer:
      "Download Evolve Workout Tracker from the Apple App Store, then sign up with your Apple ID on the login screen.",
  },
  {
    question: "Who can use Evolve?",
    answer:
      "Evolve is available in English on the Apple App Store for users in Canada and the USA. You must be at least 13 years old to create an account.",
  },
  {
    question: "What features do I get with a free account?",
    answer:
      "Track up to three workouts per week, create one custom workout template, and add up to five custom exercises.",
  },
  {
    question: "What additional benefits do I get with Evolve Pro?",
    answer:
      "With Evolve Pro you can track unlimited workouts, create unlimited templates and exercises, view progress charts that show total volume and estimated one‑rep max (1RM) for each exercise, and set default rest periods and rep‑range presets for different training goals.",
  },
  {
    question: "How do I upgrade to Evolve Pro?",
    answer:
      "Open the app, go to your profile on the Home page, and tap the Pro banner. Choose a monthly or annual auto‑renewing plan—manage or cancel anytime in your Apple ID settings.",
  },
  {
    question: "Can I save a workout to use again later?",
    answer:
      "Yes. After finishing a workout, tap 'Save as Template' on the summary screen to reuse it next time.",
  },
  {
    question: "What should I do if I need support or have feedback?",
    answer:
      "Please reach out to us from the 'Help' section in the app, or email us directly at support@evolve‑app.ca.",
  },
];

function FAQ() {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const handleExpandQuestion = (question) => {
    setActiveQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <section className={styles.faqSection}>
      <h4>Frequently Asked Questions</h4>
      <div className={styles.accordian}>
        {Q_AND_A.map((i, index) => {
          const isOpen = activeQuestions.includes(i.question);
          return (
            <div className={styles.accordianItem} key={index}>
              <button
                className={[
                  styles.accordianButtonClosed,
                  isOpen && styles.accordianButtonOpen,
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleExpandQuestion(i.question)}
              >
                <span className={styles.question}>
                  <h5>{i.question}</h5>
                </span>
                <span className={styles.chevron}>
                  {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </span>
              </button>
              {isOpen && (
                <div className={styles.answer}>
                  <p>{i.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;

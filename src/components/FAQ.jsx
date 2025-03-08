import React, { useState } from "react";
import styles from "../styles/FAQ.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Q_AND_A = [
  {
    question: "How do I track my workouts with Evolve?",
    answer:
      "Start a new workout with just a tap from the 'Workouts' tab, adding exercises as you go. Or, use one of our pre-made workout templates or your custom templates to follow a pre-made routine.",
  },
  {
    question: "Can I create my own workout templates?",
    answer:
      "Yes! With Evolve, you can easily create and save your custom workout templates. Simply select exercises, specify your sets and reps, and reuse these templates anytime to simplify your workouts.",
  },
  {
    question: "How do I review past workouts to track my progress?",
    answer:
      "Head to the 'History' section, where you can explore detailed stats from your past workouts. View your progress on a calendar or scroll through a list, and tap on any workout to see summary stats along with exercises and sets performed.",
  },
  {
    question: "Is there a rest timer between sets?",
    answer:
      "Absolutely! Evolve includes a built-in, customizable rest timer that can automatically start after each set, helping you keep the ideal pace without needing a separate timer. You can even customize the default duration based on your workout focus.",
  },
  {
    question: "What if an exercise I use isn't in the library?",
    answer:
      "Evolve offers a library of over 250 exercises with instructional videos, but you can also easily create and add your own exercises to fully personalize your workouts.",
  },
  {
    question: "How do I sign up? Is it free?",
    answer:
      "Evolve Workout Tracker is currently available exclusively on the Apple iOS App Store. Simply download the app and sign up effortlessly using your Apple ID—it's quick and easy!",
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

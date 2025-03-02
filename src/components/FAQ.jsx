import React, { useState } from "react";
import styles from "../styles/FAQ.module.css";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Q_AND_A = [
  {
    question: "How do I track my workouts in real time?",
    answer:
      "Evolve offers real-time tracking for every set and rep. Simply start your workout session, and the app will automatically log your exercises. You can even see a timer for rest periods to help you stay on pace between sets.",
  },
  {
    question: "Can I create and save my own workout templates?",
    answer:
      "Absolutely! You can easily build custom templates by adding exercises, sets, and reps. Once saved, you can reuse these templates for future workouts to streamline your routine.",
  },
  {
    question: "How can I review my past workouts to see my progress?",
    answer:
      "Head over to the ‘History’ section to view detailed stats for every workout you’ve completed. You can track your progression over time, identify areas for improvement, and stay motivated to hit your goals.",
  },
  {
    question: "Is there a rest timer included?",
    answer:
      "Yes. Each time you log a set, a built-in rest timer will start automatically. It’s customizable and ensures you stay on schedule without needing a separate stopwatch or timer.",
  },
  {
    question: "What if the exercise I need isn’t in your library?",
    answer:
      "We offer a library of 250+ exercises with video demos to help you master your form, but you can also create your own exercises if something isn’t listed. This way, your routine is always 100% personalized.",
  },
  {
    question: "How do video demos help me improve my technique?",
    answer:
      "Each exercise in our library includes a brief video demonstration. These videos highlight the proper form and technique, so you can perform each move safely and effectively.",
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
                className={styles.accordianButton}
                onClick={() => handleExpandQuestion(i.question)}
              >
                <span className={styles.question}>
                  <h5>{i.question}</h5>
                </span>
                <span className={styles.chevron}>
                  {isOpen ? (
                    <GoChevronUp size={14} />
                  ) : (
                    <GoChevronDown size={14} />
                  )}
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

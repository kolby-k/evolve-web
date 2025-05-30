import { useState } from "react";
import styles from "../styles/FAQ.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Q_AND_A = [
  {
    question: "Who can use Evolve?",
    answer:
      "Evolve is currently available in English on the Apple App Store for users in Canada and the United States. You must be at least 13 years old to create an account.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Download Evolve Workout Tracker from the Apple App Store and sign up with your Apple ID. It is 100% free to get started!",
  },
  {
    question: "What features do I get with a free account?",
    answer:
      "You get full access to the exercise library, can track up to 3 workouts per week, create 1 custom workout template, and add up to 5 custom exercises.",
  },
  {
    question: "What do I get with Evolve Pro?",
    answer:
      "Evolve Pro removes all limits: ·Track unlimited workouts ·Create unlimited workout templates ·Add unlimited exercises ·View progress charts for every exercise ·Customize default rest durations and rep ranges per workout focus",
  },
  {
    question: "How do I upgrade to Evolve Pro?",
    answer:
      "Open the Evolve Workout Tracker app, tap the Evolve Pro banner on the Home screen, and choose a monthly or annual plan. All subscriptions are processed via Apple in-app purchase and can be cancelled anytime in your Apple ID settings.",
  },
  {
    question: "Can I save a workout to use again later?",
    answer:
      "Yes—workouts can be saved as templates. After you finish a workout, tap Save as Template on the summary screen, or later from the history screen. Your templates live under Private Templates and can be reused anytime. You can also build custom templates from scratch.",
  },
  {
    question: "What should I do if I need support or help?",
    answer:
      "Open the Evolve Workout Tracker app, and from the Profile screen tap Help ▸ Contact Support. You can also email support@evolve-app.ca.",
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
    <section id="FAQ-section" className={styles.faqSection}>
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
                  {(() => {
                    const DELIMITER = "·";

                    // If the answer contains the delimiter, build intro + bullet list
                    if (i.answer.includes(DELIMITER)) {
                      // 1️⃣ split → trim → drop empty elements
                      const parts = i.answer
                        .split(DELIMITER)
                        .map((str) => str.trim())
                        .filter(Boolean);

                      // 2️⃣ first segment is the intro sentence (if any)
                      const intro = parts.shift();

                      return (
                        <>
                          {intro && <p>{intro}</p>}
                          <ul className={styles.bulletList}>
                            {parts.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </>
                      );
                    }

                    // Fallback: plain paragraph
                    return <p>{i.answer}</p>;
                  })()}
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

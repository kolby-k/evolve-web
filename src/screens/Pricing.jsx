import React, { useState } from "react";
import styles from "../styles/Pricing.module.css";
import { FaCheckCircle } from "react-icons/fa";

const TIERS = [
  {
    name: "Free",
    priceAnnual: "$0",
    priceMonthly: "$0",
    currency: "USD",
    subTitle: "Free for everyone",
    features: [
      "Track up to 3 workouts per week",
      "Full access to the exercise library",
      "1 custom workout template",
      "Create up to 3 custom exercises",
    ],
  },
  {
    name: "Premium",
    priceAnnual: "$39.99",
    priceMonthly: "$5.99",
    currency: "USD",
    subTitle: "Unlock all features",
    features: [
      "Track unlimited workouts per week",
      "Full access to the exercise library",
      "Unlimited custom workout templates",
      "Unlimited custom exercises",
      "Detailed analytics on exercise performance",
    ],
  },
];

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div id={styles.screen}>
      <div id={styles.titleLayout}>
        <h1>Pricing</h1>
        <p>
          Start for free to begin tracking your workouts. Upgrade to enable
          features including unlimited workout tracking, custom templates, and
          many additional features.
        </p>
      </div>

      <section id={styles.timePeriodToggle}>
        <div className={styles.toggleContainer}>
          <button
            onClick={() => setIsMonthly(true)}
            className={styles.toggleButton}
            style={
              isMonthly ? { backgroundColor: "#4169E1", borderRadius: 20 } : {}
            }
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={[styles.toggleButton]}
            style={
              !isMonthly
                ? {
                    backgroundColor: "#4169E1",
                    borderRadius: 20,
                  }
                : {}
            }
          >
            Annual
          </button>
        </div>
      </section>
      <div id={styles.pricingTable}>
        {TIERS.map((price, index) => (
          <div key={index} className={styles.column}>
            <h2>{price.name}</h2>
            <h3>
              {isMonthly
                ? price.priceMonthly + " " + price.currency + " / month"
                : price.priceAnnual + " " + price.currency + " / year"}
            </h3>
            <span>
              <p>{price.subTitle}</p>
            </span>
            <ul>
              {price.features.map((feature, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.listIcon} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={styles.buttonEffect}>Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

import React, { useState } from "react";
import styles from "../styles/Pricing.module.css";
import { FaCheckCircle } from "react-icons/fa";

const TIERS = [
  {
    name: "Free",
    amount: {
      month: ["0", "0"], //  month, year,
      year: ["0", "0"],
    },
    symbol: "$",
    currency: "USD",
    promotion: null,
    subTitle: "Limited access to all features",
    features: [
      "Track 3 workouts per week.",
      "Access to exercise library.",
      "Create 1 workout template.",
      "Create 3 exercises.",
    ],
  },
  {
    name: "Premium",
    priceAnnual: "$39.99",
    priceMonthly: "$5.99",
    amount: {
      month: ["6.99", "83.88"], //  month, year,
      year: ["4.49", "53.88"],
    },
    symbol: "$",
    currency: "USD",
    promotion: "Save 36%",
    subTitle: "Unlock all features and benefits",
    features: [
      "Unlimited workouts.",
      "Access to exercise library.",
      "Create Unlimited workout templates.",
      "Create Unlimited exercises.",
      "Exercise performance charts.",
    ],
  },
];

function Pricing() {
  const [timePeriod, setTimePeriod] = useState("year");

  const isMonthly = timePeriod === "month";

  const getAnnualCostText = (price, tierIndex) => {
    if (!isMonthly && tierIndex === 1) {
      return (
        <>
          <span className={styles.slashText}>
            {price.currency}{" "}
            {parseFloat(price.amount["month"][0] * 12).toFixed(2)}
          </span>
          {price.currency} {price.symbol}
          {price.amount[timePeriod][1]} per year
        </>
      );
    } else if (isMonthly && tierIndex === 1) {
      return "Billed every month.";
    } else {
      return "Free for everyone.";
    }
  };

  return (
    <div id={styles.screen}>
      <div id={styles.titleLayout}>
        <h1>Pricing</h1>
        <p>
          Start for free to begin tracking your workouts. Upgrade to premium for
          access to all features with no restrictions.
        </p>
      </div>

      <section id={styles.timePeriodToggle}>
        <div className={styles.toggleContainer}>
          <button
            onClick={() => setTimePeriod("month")}
            className={styles.toggleButton}
            style={
              isMonthly ? { backgroundColor: "#4169E1", borderRadius: 20 } : {}
            }
          >
            Monthly
          </button>
          <button
            onClick={() => setTimePeriod("year")}
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
        {TIERS.map((price, index) => {
          // index 1 is the premium membership
          const annualPricingText = getAnnualCostText(price, index);

          return (
            <div key={index} className={styles.column}>
              {!isMonthly && price?.promotion && (
                <span id={styles.promotionTag}>{price.promotion}</span>
              )}
              <h2>{price.name}</h2>
              <h3>
                {price.currency} {price.symbol}
                {price.amount[timePeriod][0]} /mo
              </h3>
              <h4>{annualPricingText}</h4>
              <span className={styles.subTitle}>
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
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;

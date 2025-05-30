import React, { useState } from "react";
import styles from "../styles/Pricing.module.css";
import { FaCheckCircle } from "react-icons/fa";
import useScrollToTop from "../hooks/useScrollToTop";

const TIERS = [
  {
    name: "Free",
    amount: {
      month: ["0", "0"], //  month, year,
      year: ["0", "0"],
    },
    symbol: "$",
    currency: "CAD",
    promotion: null,
    subTitle: "Limited access to all features",
    features: [
      "Track 3 workouts per week.",
      "Create 1 workout template.",
      "Create 3 exercises.",
      "Access to exercise library.",
    ],
  },
  {
    name: "Premium",
    priceAnnual: "$59.90",
    priceMonthly: "$9.99",
    amount: {
      month: ["9.99", "119.90"], //  month, year,
      year: ["4.99", "59.90"],
    },
    symbol: "$",
    currency: "CAD",
    promotion: "Save 50%",
    subTitle: "Remove all limits and more",
    features: [
      "Unlimited workouts.",
      "Unlimited workout templates.",
      "Create unlimited exercises.",
      "Exercise charts / analytics.",
      "Access to exercise library.",
    ],
  },
];

function Pricing() {
  const [timePeriod, setTimePeriod] = useState("year");
  const isMonthly = timePeriod === "month";

  useScrollToTop();

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
    <div className={styles.screen}>
      <div className={styles.titleLayout}>
        <h1>Pricing</h1>
        <p>
          Start for free to begin tracking your workouts. Upgrade to premium for
          access to all features with no restrictions.
        </p>
      </div>

      <section className={styles.timePeriodToggle}>
        <div className={styles.toggleContainer}>
          <button
            onClick={() => setTimePeriod("month")}
            className={styles.toggleButton}
            style={
              isMonthly ? { backgroundColor: "#0C6CF2", borderRadius: 20 } : {}
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
                    backgroundColor: "#0C6CF2",
                    borderRadius: 20,
                  }
                : {}
            }
          >
            Annual
          </button>
        </div>
      </section>
      <div className={styles.pricingTable}>
        {TIERS.map((price, index) => {
          // index 1 is the premium membership
          const annualPricingText = getAnnualCostText(price, index);

          return (
            <div key={index} className={styles.column}>
              {!isMonthly && price?.promotion && (
                <span className={styles.promotionTag}>{price.promotion}</span>
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
              <a
                href={import.meta.env.VITE_PUBLIC_EVOLVE_APP_STORE_URL}
                target="_blank"
                style={{ justifyContent: "center" }}
              >
                <button className={styles.buttonEffect}>Get Started</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;

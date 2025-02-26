import React from "react";
import styles from "../styles/Privacy.module.css";

const PRIVACY_POLICY_DATE = "February 26, 2025";
const SUPPORT_EMAIL_ADDRESS = "support@evolve-app.ca";

function Privacy() {
  return (
    <div className={styles.screen}>
      <h1>Privacy Policy</h1>
      <p className={styles.lastUpdated}>
        <strong>Last Updated: {PRIVACY_POLICY_DATE}</strong>
      </p>

      <div className={styles.container}>
        <p>
          Welcome to <strong>Evolve Workout Tracker</strong> ("Evolve," "we,"
          "us," or "our"). We respect your privacy and are committed to
          protecting your personal information...
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Personal Information You Provide</h3>
        <ul>
          <li>
            <strong>Name:</strong> Used for product personalization and linked
            to your identity.
          </li>
          <li>
            <strong>Email Address:</strong> Used for app functionality and
            linked to your identity.
          </li>
          <li>
            <strong>Account Information:</strong> If you create an account, we
            collect details such as your name, email address, age, body weight,
            and gender.
          </li>
          <li>
            <strong>Customer Support Data:</strong> If you contact us for
            assistance, we may collect information related to your inquiry.
          </li>
        </ul>

        <h3>1.2 Information We Collect Automatically</h3>
        <ul>
          <li>
            <strong>User ID:</strong> Used for app functionality and linked to
            your identity.
          </li>
          <li>
            <strong>Usage Data:</strong> Logs app interactions, session
            duration, and crash reports.
          </li>
          <li>
            <strong>Diagnostics Data:</strong> Performance data and crash data
            used for analytics.
          </li>
          <li>
            <strong>Device Information:</strong> Device type, OS, and app
            version for debugging and analytics.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>
            Provide and improve the <strong>workout tracking features</strong>{" "}
            of Evolve.
          </li>
          <li>Personalize recommendations based on your fitness data.</li>
          <li>
            Process <strong>subscriptions and payments</strong> securely through
            Apple.
          </li>
          <li>
            Troubleshoot, improve, and <strong>analyze app performance</strong>{" "}
            using anonymized data.
          </li>
          <li>
            Respond to <strong>customer support requests</strong> and inquiries.
          </li>
        </ul>

        <h2>3. Data Sharing and Third Parties</h2>
        <ul>
          <li>
            <strong>Hosting & Backend Services:</strong> Render hosts our
            PostgreSQL database and Node.js server.
          </li>
          <li>
            <strong>App Distribution & Build Services:</strong> Expo EAS and
            Apple.
          </li>
          <li>
            <strong>Analytics & Logging:</strong> AWS for tracking errors.
          </li>
          <li>
            <strong>Payments:</strong> Apple's in-app purchase system.
          </li>
          <li>
            <strong>Legal Authorities:</strong> If required by law or to prevent
            fraud.
          </li>
        </ul>

        <h2>4. Data Retention & Deletion</h2>
        <p>
          <strong>Workout logs and personal information</strong> are stored as
          long as you maintain an account.
        </p>
        <ul>
          <li>
            You may <strong>request deletion of your account and data</strong>{" "}
            by contacting us at <strong>{SUPPORT_EMAIL_ADDRESS}</strong> or
            through the in-app settings.
          </li>
          <li>
            Backup copies may be retained for legal and compliance purposes
            before being fully deleted.
          </li>
        </ul>

        <h2>5. Your Rights & Choices</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your information.</li>
          <li>Withdraw consent for data processing where applicable.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <strong>{SUPPORT_EMAIL_ADDRESS}</strong>.
        </p>

        <h2>6. Security Measures</h2>
        <p>
          We use <strong>industry-standard security protocols</strong> to
          protect your data, including:
        </p>
        <ul>
          <li>Encrypted storage of user information.</li>
          <li>Secure authentication for account access.</li>
          <li>Limited employee access to personal data.</li>
        </ul>
        <p>
          While we take every precaution,{" "}
          <strong>no system is 100% secure</strong>, and we advise users to
          maintain strong passwords.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Evolve is <strong>not intended for users under 13 years old</strong>.
          We do not knowingly collect data from children under 13. If we
          discover such data, we will delete it immediately.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted on our website and app, with a revised "Last Updated" date.
          Continued use of Evolve after changes signifies your acceptance.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions, contact us at:{" "}
          <strong>{SUPPORT_EMAIL_ADDRESS}</strong>
        </p>
      </div>
    </div>
  );
}

export default Privacy;

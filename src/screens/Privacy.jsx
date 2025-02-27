import React from "react";
import styles from "../styles/Privacy.module.css";

const PRIVACY_POLICY_DATE = "February 27, 2025";
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
          protecting your personal information. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your data when you use our
          website and mobile application ("App").
        </p>

        <p>
          By using Evolve, you agree to the collection and use of information in
          accordance with this Privacy Policy.{" "}
          <strong>
            If you do not agree, please discontinue using our services.
          </strong>
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of personal data:</p>
        <h3>1.1 Personal Information You Provide</h3>
        <ul>
          <li>
            <strong>Account Information:</strong> If you create an account, we
            collect details such as your name, email address, age, body weight,
            gender to personalize your experience.
          </li>
          <li>
            <strong>Apple User ID:</strong> Stored for authentication purposes
            to ensure secure sign-in with Apple.
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
          <li>
            <strong>Timestamps:</strong> We store account creation time, last
            modified time, and, if applicable, deletion time for security and
            compliance.
          </li>
        </ul>

        <h3>1.3 Workout Tracking Data</h3>
        <p>
          Evolve is primarily a workout tracking app, as such we collect data to
          enhance your experience, including:
        </p>
        <ul>
          <li>
            <strong>Workout Logs: </strong> Details of exercises, sets, reps,
            weights, and progress history.
          </li>
          <li>
            <strong>Custom User Generated Content: </strong>If you create custom
            exercises or workout templates, we store and associate them with
            your account.
          </li>
          <li>
            <strong>Performance Metrics: </strong> Data related to your fitness
            progress, trends, and insights.
          </li>
        </ul>
        <p>
          This data is collected solely for the purpose of enabling core
          functionality and improving the accuracy of recommendations.
        </p>

        <h2>2. Login and Authentication</h2>
        <p>
          Evolve exclusively uses{" "}
          <a href="https://support.apple.com/en-us/102609" target="_blank">
            Sign in with Apple
          </a>{" "}
          for user authentication. This means:
        </p>
        <ul>
          <li>We do not store or manage passwords.</li>
          <li>
            If you lose access to your Apple ID, we cannot reset or recover your
            login credentials.
          </li>
          <li>
            Any account management, including password recovery, must be done
            through <strong>Apple's account recovery process</strong>.
          </li>
          <li>
            By using Evolve, you acknowledge that you are responsible for
            maintaining access to your Apple ID.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We process your personal data to:</p>
        <ul>
          <li>
            Provide and improve the <strong>workout tracking features</strong>{" "}
            of Evolve.
          </li>
          <li>Manage membership tiers and access to premium features.</li>
          <li>Provide subscriptions and payments securely through Apple.</li>
          <li>
            Troubleshoot, improve, and <strong>analyze app performance</strong>{" "}
            using anonymized data.
          </li>
          <li>Personalize recommendations based on your fitness data.</li>
          <li>
            Respond to <strong>customer support requests</strong> and inquiries.
          </li>
        </ul>

        <h2>4. Data and Third Parties</h2>
        <h3>4.1 Data Sharing and Third Parties</h3>

        <p>
          We do <strong>not</strong> sell or rent your personal information.
          However, we may share your data with:
        </p>
        <ul>
          <li>
            <strong>Legal Authorities:</strong> If required by law or to prevent
            fraud.
          </li>
          <li>
            <strong>Hosting & Backend Services:</strong> Render hosts our
            PostgreSQL database and Node.js server, with servers located in the
            United States.
          </li>
          <li>
            <strong>App Distribution & Build Services:</strong> We use Expo EAS
            and Apple to build and distribute the Evolve app.
          </li>
          <li>
            <strong>Analytics & Logging:</strong> We may use AWS to track errors
            and maintain app stability; however, no personal data is stored in
            AWS logs, only error reports for debugging purposes.
          </li>
          <li>
            <strong>Payments:</strong> All subscription payments are processed
            through <strong>Apple's in-app purchase system.</strong>
          </li>
        </ul>
        <p>
          All third parties are required to protect your data and only process
          it for specified purposes.
        </p>

        <h3>4.2. Data Storage & Location</h3>

        <p>
          We do not sell or rent your personal information. However, we may
          share your data with:
        </p>
        <ul>
          <li>
            <strong> Backend & Database: </strong>Our primary servers, including
            the PostgreSQL database and backend services, are hosted on Render
            in the United States.
          </li>
          <li>
            <strong>Hosting & Backend Services:</strong> Render hosts our
            PostgreSQL database and Node.js server.
          </li>
          <li>
            <strong>Error Logging & Analytics: </strong>We use AWS for logging
            and tracking errors, which may store debugging data in the United
            States but does not contain personally identifiable information.
          </li>
        </ul>
        <p>
          Your data may be transferred and processed in the United States, where
          our servers are located. By using the app, you consent to this
          transfer of data.
        </p>

        <h3>4.3 Data Retention & Deletion</h3>
        <ul>
          <li>
            <strong>Workout logs and personal information</strong> are stored as
            long as you maintain an account.
          </li>
          <li>
            Timestamps for account creation, modification, and deletion are
            maintained for security and compliance.
          </li>
          <li>
            You may <strong>request deletion of your account and data</strong>{" "}
            by contacting us at <strong>{SUPPORT_EMAIL_ADDRESS}</strong>.
          </li>
          <li>
            Backup copies may be retained for legal and compliance purposes
            before being fully deleted.
          </li>
        </ul>

        <h3>4.4 Your Rights & Choices</h3>
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

        <h2>5. Security Measures</h2>
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

        <h2>6. Children's Privacy</h2>
        <p>
          Evolve is <strong>not intended for users under 13 years old</strong>.
          We do not knowingly collect data from children under 13. If we
          discover such data, we will delete it immediately.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted on our website and app, with a revised "Last Updated" date.
          Continued use of Evolve after changes signifies your acceptance.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions, contact us at:{" "}
          <strong>{SUPPORT_EMAIL_ADDRESS}</strong>
        </p>
      </div>
    </div>
  );
}

export default Privacy;

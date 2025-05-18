import React from "react";
import styles from "../styles/Privacy.module.css";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";

const PRIVACY_POLICY_DATE = "May 18, 2025";
const SUPPORT_EMAIL_ADDRESS = "support@evolve-app.ca";

function Privacy() {
  useScrollToTop();

  return (
    <div className={styles.screen}>
      <h1>Privacy Policy</h1>
      <p className={styles.lastUpdated}>
        <strong>Last Updated: {PRIVACY_POLICY_DATE}</strong>
      </p>

      <div className={styles.container}>
        <p>
          Evolve Workout Tracker ("Evolve", "we", "us", or "our") is a
          workout‑tracking Apple iOS application and companion website owned and
          operated by Kolby Klassen (sole proprietor).
        </p>
        <p>
          This Privacy Policy describes how we collect, use, disclose, and
          safeguard your information when you use the Evolve application and the
          Evolve website (together, the “Services”).
        </p>
        <p>
          By accessing or using the Services, you acknowledge that you have read
          and understood this Policy and agree to the practices it describes.{" "}
          <strong>
            If you do not agree, please discontinue use of the Services.
          </strong>
        </p>
        <p>
          If you have any questions about this Policy or your data, contact us
          at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          .
        </p>
        <h2>1. Information Collected</h2>
        <p>
          We collect two primary categories of data: (1) information you provide
          and (2) information we collect automatically.
        </p>
        <h3>1.1 Information You Provide</h3>
        <p> We collect personal data you voluntarily provide, including:</p>
        <ul>
          <li>
            <strong>Account Information</strong>: If you create an account, we
            collect details such as your name, age, height, body weight, and
            gender to personalize your experience.
          </li>
          <li>
            <strong>Workout Tracking Data</strong>: Because Evolve is primarily
            a workout tracking app, we also collect data to enhance your
            experience, including:
            <ul>
              <li>
                <strong>Workout Logs</strong>: Details of workouts including
                exercises, sets, rest periods, and other related workout
                tracking information.
              </li>
              <li>
                <strong>Custom User Generated Content</strong>: If you create
                content such as custom exercises, notes, or workout templates,
                these are saved and linked to your account for personalization
                and continuity of service.
              </li>
              <li>
                <strong>Body Measurements</strong>: If you add body part
                measurements, they will be saved and associated with your
                account.
              </li>
            </ul>
          </li>
          <li>
            <strong>Customer Support Data</strong>: If you contact us for
            assistance, we may collect information related to your inquiry in
            order to provide support.
          </li>
        </ul>
        <p>
          This data is collected solely for the purpose of enabling core
          functionality and improving the reliability and accuracy of App
          features.
        </p>
        <h3>1.2 Information Collected Automatically</h3>
        <p>
          We value data transparency and are committed to providing you with a
          safe, reliable, and consistent experience using Evolve. To support
          this commitment, we automatically collect the following information:
        </p>
        <ul>
          <li>
            <strong>Apple User ID:</strong> We collect and store your Apple user
            identifier (UUID) provided by Sign in with Apple solely to enforce
            secure authentication.
          </li>
          <li>
            <strong>Email Address:</strong> We collect and store your email
            address. If you use Apple’s private relay, we store the relay
            address. We use it only for infrequent, important updates—such as
            pricing changes, this Privacy Policy, and the{" "}
            <a href="/terms-of-service">Terms of Service</a>.
          </li>
          <li>
            <strong>Full Name:</strong> We collect your first and last name when
            provided via Sign in with Apple to personalize your experience and
            enhance security.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect authentication tokens, app
            interaction details, and session durations to detect irregularities,
            prevent unauthorized access, and improve functionality.
          </li>
          <li>
            <strong>Diagnostics Data:</strong> We collect performance metrics
            and crash reports to identify and resolve errors and for debugging
            purposes.
          </li>
          <li>
            <strong>Error Information:</strong> When an error occurs, we log
            device type, operating system, network details, and IP address for
            analytics and troubleshooting.
          </li>
          <li>
            <strong>Timestamps:</strong> We store account creation, last
            modification, and deletion times for security, compliance, and audit
            purposes.
          </li>
        </ul>
        <p>
          We use this information for security, analytics, debugging, and to
          continuously improve your experience.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p> We process your personal data for the following purposes:</p>
        <ol>
          <li>To provide and enhance workout‑tracking features.</li>
          <li>To manage membership tiers and premium‑feature access.</li>
          <li>To securely process subscriptions and payments through Apple.</li>
          <li>
            To monitor, improve, and analyse performance using anonymised data.
          </li>
          <li>To identify and resolve unexpected errors and bugs.</li>
          <li>To personalise recommendations based on your fitness data.</li>
          <li>To respond to customer‑support requests.</li>
          <li>To display public App Store reviews as testimonials.</li>
          <li>
            To notify you of important updates (Privacy Policy, Terms, pricing).
          </li>
        </ol>
        <h2>3. Data and Third Parties</h2>
        <h3>3.1 Data Sharing and Third Parties</h3>
        <p>
          We never sell or rent your personal information. We share it only with
          the following entities:
        </p>
        <ul>
          <li>
            <strong>Legal Authorities</strong>: We disclose data when required
            by law or to prevent fraud.
          </li>
          <li>
            <strong>Payments</strong>: We send subscription and transaction
            details to Apple; we never see your card information.
          </li>
          <li>
            <strong>Hosting &amp; Backend Services</strong>: We store and
            process your data on servers managed by Render.
          </li>
          <li>
            <strong>App Distribution &amp; Build Services</strong>: We use Expo
            and Apple to build and distribute the Evolve Workout Tracker App.
          </li>
          <li>
            <strong>Analytics &amp; Logging</strong>: We may collect error and
            diagnostic logs (may include IP address) to maintain stability and
            security.
          </li>
        </ul>
        <p>
          All third parties are required to protect your data and only process
          it for specified purposes. You can learn more about their individual
          policies here:
        </p>
        <ul>
          <li>
            Render:{" "}
            <a href="https://render.com/privacy" target="_blank">
              https://render.com/privacy
            </a>
          </li>
          <li>
            Expo:{" "}
            <a href="https://expo.dev/privacy" target="_blank">
              https://expo.dev/privacy
            </a>
          </li>
          <li>
            Apple{" "}
            <a
              href="https://www.apple.com/legal/privacy/en-ww/"
              target="_blank"
            >
              https://www.apple.com/legal/privacy
            </a>
          </li>
        </ul>
        <h3>3.2 Data Storage &amp; Location</h3>
        <p>
          Our servers are in the United States. All data processing complies
          with Canadian privacy laws and applicable US regulations. By using the
          App, you consent to this transfer of data.
        </p>
        <ul>
          <li>
            <strong>Servers &amp; Database</strong>: Our servers and database
            are hosted in the United States, and all transfers are secured via
            encryption, access controls, and regular audits.
          </li>
        </ul>
        <p>
          For users outside of the USA, please note that any transfer of your
          data is subject to appropriate safeguards including encrypted data
          transfer.
        </p>
        <h3>3.3 Data Retention &amp; Deletion</h3>
        <p>
          We store your account-related data, workout data, and any personal
          information you provide as long as your account is active.
        </p>
        <p>
          If you wish to delete your account, you can do so from within the
          Evolve Workout Tracker App. You may also contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          . Upon your request, your account will be deactivated, and your
          personal information will be permanently anonymized (your personal
          identifying details will be removed). Please note that the anonymized
          data may be retained indefinitely for legal and compliance purposes.
        </p>
        <h3>3.4 Your Rights &amp; Choices</h3>
        <p>You may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of your information.</li>
          <li>Object to the processing of your data.</li>
          <li>Restrict processing of your data.</li>
          <li>Have your personal data removed.</li>
          <li>Submit a complaint.</li>
          <li>Withdraw consent for data processing where applicable.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          .
        </p>

        <h2>4. Login and Authentication</h2>
        <p>
          Evolve exclusively uses Sign in with Apple for user authentication.
          This means:
        </p>
        <ul>
          <li>
            When you sign-up, we request your email address and name from Apple,
            which you may choose to hide.
          </li>
          <li> We do not store or manage passwords.</li>
          <li>
            If you lose access to your Apple ID, we cannot reset or recover your
            login credentials. Password recovery must be done through Apple's
            account recovery process.
          </li>
          <li>
            By using Evolve, you acknowledge that you are responsible for
            maintaining access to your Apple ID.
          </li>
        </ul>
        <p>
          If you have concerns about unauthorized access to your account, please
          contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          .
        </p>
        <h2>5. Security Measures</h2>
        <p>
          We use industry-standard security protocols to protect your data,
          including:
        </p>
        <ul>
          <li>
            Encrypting sensitive information during storage and transmission.
          </li>
          <li>Secure authentication for account access.</li>
          <li>Limited internal access to personal data.</li>
        </ul>
        <p>
          We respect your privacy and it is a priority to handle your
          information securely. While we take every precaution, no system is
          100% secure, and we advise users to maintain strong passwords and
          avoid sharing private information including account credentials.
        </p>
        <h2>6. Children's Privacy</h2>
        <p>
          Evolve is not intended for users under 13 years old. We do not
          knowingly collect data from children under 13. If we discover such
          data, we will delete it immediately. If you believe your child has
          provided data, please email us and we will delete it.
        </p>
        <h2>7. Compliance</h2>
        <p>
          We are committed to protecting your privacy and ensuring your personal
          information is handled with the utmost care. We comply with the
          Personal Information Protection and Electronic Documents Act (PIPEDA)
          and other applicable Canadian privacy legislation.
        </p>
        <p>
          By using Evolve, you acknowledge and consent to the collection, use,
          and transfer of your data in accordance with these standards and
          regulations. For any questions regarding our privacy practices, please
          feel free to contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          .
        </p>
        <h2 id="policy-changes">8. Policy Changes</h2>
        <p>
          We may update our policies, including the Privacy Policy and{" "}
          <Link to={"/terms-of-service"}>Terms of Service</Link>, periodically.
          If any changes occur, we will notify you by email and post all updates
          on the Evolve website with a revised “Last Updated” date. We encourage
          you to review these policies regularly to stay informed about any
          modifications.
        </p>
        <h4 className="sub-heading">Privacy Policy</h4>
        <p>
          Your continued use of Evolve after any Privacy Policy changes
          signifies your acceptance of the updated Privacy Policy.
        </p>
        <h4 className="sub-heading">Terms of Service</h4>
        <p>
          Your continued use of Evolve after any Terms of Service updates
          signifies your acceptance of the revised Terms of Service. For more
          details, please see the{" "}
          <Link to={"/terms-of-service"}>Terms of Service</Link>.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns, please contact us at:{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Privacy;

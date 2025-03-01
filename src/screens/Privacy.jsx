import React from "react";
import styles from "../styles/Privacy.module.css";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";

const PRIVACY_POLICY_DATE = "February 27, 2025";
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
          Evolve Workout Tracker ("Evolve" or "App") is a workout tracking
          application owned by Kolby Klassen ("me", "I", or "my"), a sole
          proprietor.
        </p>
        <p>
          I respect your privacy and am committed to protecting your personal
          information. This Privacy Policy explains how I collect, use,
          disclose, and safeguard your data when you use the Evolve website and
          Evolve Workout Tracker mobile application (collectively called
          "Service").
        </p>
        <p>
          By using Evolve, you agree to the collection and use of information in
          accordance with this Privacy Policy.{" "}
          <strong>
            If you do not agree, please discontinue using my Service.
          </strong>
        </p>
        <h2>1. Information Collected</h2>
        <p>
          I collect two primary categories of data: (1) information you provide
          and (2) information I collect automatically.
        </p>
        <h3>1.1 Information You Provide</h3>
        <p>I collect personal data you voluntarily provide, including:</p>
        <ul>
          <li>
            <strong>Account Information</strong>: If you create an account, I
            collect details such as your name, age, height, body weight, and
            gender to personalize your experience.
          </li>
          <li>
            <strong>Workout Tracking Data</strong>: Because Evolve is primarily
            a workout tracking app, I also collect data to enhance your
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
                it is saved and linked to your account for personalization and
                continuity of service.
              </li>
              <li>
                <strong>Body Measurements</strong>: If you add body part
                measurements, they will be saved and associated with your
                account.
              </li>
            </ul>
          </li>
          <li>
            <strong>Customer Support Data</strong>: If you contact me for
            assistance, I may collect information related to your inquiry in
            order to provide support.
          </li>
        </ul>
        <p>
          This data is collected solely for the purpose of enabling core
          functionality and improving the reliabilty and accuracy of App
          features.
        </p>
        <h3>1.2 Information Collected Automatically</h3>
        <p>
          I value data transparency and am committed to providing you with a
          safe, reliable, and consistent experience using Evolve. To support
          this commitment, I automatically collect the following information:
        </p>
        <ul>
          <li>
            <strong>Apple User ID</strong>: Stored for authentication purposes
            to ensure secure sign-in with Apple.
          </li>
          <li>
            <strong>Email Address</strong>: You may choose to show or hide your
            email address when signing up by using a private Apple relay email.
            I will contact you at the provided email address only for
            infrequent, important updates, including changes to pricing, this
            Privacy Policy, and the{" "}
            <Link to={"/terms-of-service"}>Terms of Service</Link>.
          </li>
          <li>
            <strong>Usage Data</strong>: This includes authentication
            information (such as access tokens), details of App interactions,
            and session duration. It is collected to enhance security, detect
            irregularities, prevent unauthorized access, and improve the user
            experience.
          </li>
          <li>
            <strong>Diagnostics Data</strong>: Performance metrics and crash
            reports are collected to fix errors and for debugging purposes.
            Users can opt out through Apple settings.
          </li>
          <li>
            <strong>Device Information</strong>: Information such as device
            type, operating system, and App version may be collected for
            debugging and analytics.
          </li>
          <li>
            <strong>Timestamps</strong>: I store account creation time, last
            modified time, and, if applicable, deletion time for security and
            compliance.
          </li>
        </ul>
        <p>
          The information I collect is primarily used for security, analytics,
          and debugging, as well as to maintain and improve the user experience
          for all users.
        </p>
        <h2>2. How I Use Your Information</h2>
        <p>I process your personal data for the following purposes:</p>
        <ol>
          <li>
            To provide and enhance the workout tracking features of Evolve.
          </li>
          <li>
            To manage membership tiers and control access to premium features.
          </li>
          <li>To securely process subscriptions and payments via Apple.</li>
          <li>
            To troubleshoot, improve, and analyze App performance using
            anonymized data.
          </li>
          <li>To personalize recommendations based on your fitness data.</li>
          <li>To respond to customer support requests and inquiries.</li>
          <li>
            To use public App Store reviews as testimonials on my website.
          </li>
        </ol>
        <p>
          I may notify you about important and infrequent updates, including the
          Privacy Policy, Terms of Service, or pricing changes. I will not send
          you marketing emails or other promotional content without your
          consent.
        </p>
        <p>I value and respect your privacy:</p>
        <ol>
          <li>I do not sell or rent your data.</li>
          <li>
            I do not use data you share with Evolve for marketing or promotional
            purposes.
          </li>
        </ol>
        <h2>3. Data and Third Parties</h2>
        <h3>3.1 Data Sharing and Third Parties</h3>
        <p>
          I do not sell or rent your personal information. However, I may share
          your data with:
        </p>
        <ul>
          <li>
            <strong>Legal Authorities</strong>: If required by law or to prevent
            fraud.
          </li>
          <li>
            <strong>Payments</strong>: All subscription payments are processed
            through Apple's in-app purchase system. I do not have access to, or
            store your payment information (e.g. credit card).
          </li>
          <li>
            <strong>Hosting &amp; Backend Services</strong>: Render hosts my
            database and backend server.
          </li>
          <li>
            <strong>App Distribution &amp; Build Services</strong>: I use Expo
            and Apple to build and distribute the Evolve Workout Tracker App.
          </li>
          <li>
            <strong>Analytics &amp; Logging</strong>: I may use Amazon Web
            Services ("AWS") to track errors and maintain App stability.
          </li>
        </ul>
        <p>
          All third parties are required to protect your data and only process
          it for specified purposes.
        </p>
        <p>
          You can learn more about AWS data privacy here:{" "}
          <a href="https://aws.amazon.com/privacy" target="_blank">
            https://aws.amazon.com/privacy
          </a>
          <br />
          You can learn more about Render's data privacy here:{" "}
          <a href="https://render.com/privacy" target="_blank">
            https://render.com/privacy
          </a>
        </p>
        <h3>3.2 Data Storage &amp; Location</h3>
        <p>
          All data processing complies with Canadian privacy laws (including
          PIPEDA) and applicable US regulations. By using the App, you consent
          to this transfer of data.
        </p>
        <ul>
          <li>
            <strong>Servers &amp; Database</strong>: My servers and database are
            hosted in the United States, and all transfers are secured via
            encryption, access controls, and regular audits.
          </li>
        </ul>
        <p>
          For users outside of the USA, please note that any transfer of your
          data is subject to appropriate safeguards including encrypted data
          transfer, limited access to data, and regular audits to ensure
          compliance with applicable data protection laws.
        </p>
        <h3>3.3 Data Retention &amp; Deletion</h3>
        <p>
          I store your account-related data, workout data, and any personal
          information you provide as long as your account is active.
        </p>
        <p>
          If you wish to delete your account, simply contact me at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          . Upon your request, your account will be deactivated, and your
          personal information will be permanently anonymized (your personal
          identifying details will be removed). Please note that the anonymized
          data may be retained indefinitely for legal and compliance purposes.
        </p>
        <h3>3.4 Your Rights &amp; Choices</h3>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data I hold about you.</li>
          <li>Request correction of your information.</li>
          <li>Object to the processing of your data.</li>
          <li>Restrict processing of your data.</li>
          <li>Have your personal data removed.</li>
          <li>Submit a complaint.</li>
          <li>Withdraw consent for data processing where applicable.</li>
        </ul>
        <p>
          To exercise these rights, contact me at{" "}
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
            When you sign-up, I request your email address and name from Apple,
            which you may choose to hide.
          </li>
          <li>I do not store or manage passwords.</li>
          <li>
            If you lose access to your Apple ID, I cannot reset or recover your
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
          contact me at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          .
        </p>
        <h2>5. Security Measures</h2>
        <p>
          I use industry-standard security protocols to protect your data,
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
          I respect your privacy and it is a priority to handle your information
          securely. While I take every precaution, no system is 100% secure, and
          I advise users to maintain strong passwords and avoid sharing private
          information including account credentials.
        </p>
        <h2>6. Children's Privacy</h2>
        <p>
          Evolve is not intended for users under 13 years old. I do not
          knowingly collect data from children under 13. If I discover such
          data, I will delete it immediately.
        </p>
        <h2>7. Compliance</h2>
        <p>
          As a sole proprietor based in Canada, I am committed to protecting
          your privacy and ensuring your personal information is handled with
          the utmost care. I comply with the Personal Information Protection and
          Electronic Documents Act (PIPEDA) and other applicable Canadian
          privacy legislation.
        </p>
        <p>
          By using my services, you acknowledge and consent to the collection,
          use, and transfer of your data in accordance with these standards and
          regulations. For any questions regarding my privacy practices, please
          feel free to contact me at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          .
        </p>
        <h2 id="policy-changes">8. Policy Changes</h2>
        <p>
          I may update my policies, including the Privacy Policy and{" "}
          <Link to={"/terms-of-service"}>Terms of Service</Link>, periodically.
          If any changes occur, I will notify you by email and post all updates
          on the Evolve website with a revised “Last Updated” date. I encourage
          you to review these policies regularly to stay informed about any
          modifications.
        </p>
        <h3>8.1 Privacy Policy</h3>
        <p>
          Your continued use of Evolve after any Privacy Policy changes
          signifies your acceptance of the updated Privacy Policy.
        </p>
        <h3>8.2 Terms of Service</h3>
        <p>
          Your continued use of Evolve after any Terms of Service updates
          signifies your acceptance of the revised Terms of Service. For more
          details, please see the{" "}
          <Link to={"/terms-of-service"}>Terms of Service</Link>.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns, please contact me at:{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Privacy;

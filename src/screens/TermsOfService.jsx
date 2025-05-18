import React from "react";
import styles from "../styles/TOS.module.css";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";

const TERMS_LAST_UPDATED = "May 18, 2025";
const SUPPORT_EMAIL_ADDRESS = "support@evolve-app.ca";

function TermsOfService() {
  useScrollToTop();

  return (
    <div className={styles.screen}>
      <h1>Terms of Service</h1>
      <p className={styles.lastUpdated}>
        <strong>Last Updated: {TERMS_LAST_UPDATED}</strong>
      </p>

      <div className={styles.container}>
        <h2>1. Acceptance of Terms</h2>

        <h3>1.1 Agreement</h3>
        <p>
          By creating an account or otherwise using the Service, you acknowledge
          that you have read, understood, and agree to be bound by these Terms,
          along with our <Link to={"/privacy"}>Privacy Policy</Link> which is
          incorporated herein by reference. If you do not agree with any portion
          of these Terms, you may not access or use the Service.
        </p>

        <h2>2. Description of the Service</h2>
        <p>
          Evolve Workout Tracker (“Evolve”, “we”, “us”, or “our”) is a workout
          tracking Apple iOS application and companion website owned and
          operated by Kolby Klassen (sole proprietor). Evolve enables Users to
          record workout activities, track fitness progress, and view
          personalized workout analytics. Users can opt for a free version
          (“Basic”) or subscribe to a paid membership tier (“Pro”) offering
          enhanced features.
        </p>
        <h3>2.1 Medical Disclaimer</h3>
        <p>
          We do not provide medical advice. All activities, recommendations, and
          other information we offer are for informational purposes only. Always
          consult your physician or a qualified health professional before
          starting any exercise program (see also{" "}
          <a href={"#medical"}>Section 9. Medical Disclaimer</a> below).
        </p>
        <h2>3. Eligibility</h2>
        <h3>3.1 Age Requirement</h3>
        <p>
          You must be at least the age of majority in your jurisdiction to
          create an account or otherwise use the Service. If you are a minor,
          you must only use the Service with the involvement and consent of a
          parent or legal guardian.
        </p>
        <h3>3.2 Children’s Privacy</h3>
        <p>
          We do not knowingly collect or solicit Personal Data from anyone under
          the age of 13. If you believe a child under the age of 13 has provided
          us with Personal Data, please contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>{" "}
          and we will take steps to delete such information.
        </p>
        <h2>4. Accounts &amp; Registration</h2>
        <h3>4.1 Account Creation: </h3>
        <p>
          You may be required to create an account to access certain features of
          the Service. You agree to provide accurate, current, and complete
          information during registration. We reserve the right to suspend or
          terminate accounts based on false or misleading information.
        </p>
        <h3>4.2 Account Security:</h3>
        <p>
          You are solely responsible for safeguarding the login credentials
          (e.g., password) that you use to access the Service and for any
          activities under your credentials. We will never ask you for your
          password. If you suspect any unauthorized use of your account, please
          notify us immediately at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>{" "}
          if you suspect any unauthorized use of your account.
        </p>
        <h3>4.3 Account Termination:</h3>
        <p>
          We may suspend or terminate your account if we suspect that you have
          violated these Terms. If you have an active Pro subscription, you must
          cancel your subscription through Apple to prevent future billing. You
          may also delete your account at any time by contacting us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          .
        </p>

        <h2>5. Subscription &amp; Payments</h2>

        <h3>5.1 Free and Premium Tiers</h3>
        <p>
          Evolve offers a free version with limited features and a premium
          (“Pro”) tier with additional or enhanced functionality. The Pro tier
          is available via in-app purchases on a monthly or annual subscription
          basis. Pricing and subscription details are presented within the
          Service.
        </p>

        <h3>5.2 Promotions and Introductory Offers</h3>
        <p>
          We may offer promotional discounts and introductory offers for a
          limited time. Introductory offers are available only once per user and
          may expire if unused within the specified period.
        </p>

        <h3>5.3 Billing</h3>
        <p>
          Payment processing is handled by Apple. Charges are applied to your
          App Store account at the time of purchase and at the start of each
          renewal period. Your subscription will automatically renew unless
          auto-renew is turned off at least 24 hours before the end of the
          current period.
        </p>

        <h3>5.4 Cancellation</h3>
        <p>
          You can manage your subscriptions and disable auto-renewal at any time
          through your App Store account settings. Please review your local
          consumer rights and any applicable refund laws, as these may affect
          your cancellation and refund eligibility.
        </p>

        <h3>5.5 Changes in Pricing</h3>
        <p>
          We reserve the right to change subscription fees at our discretion. We
          will provide at least 30 days’ advance notice via email before any fee
          change takes effect. Continued use of the Service after such changes
          signifies your acceptance of the new fees.
        </p>

        <h3>5.6 Service Availability</h3>
        <p>
          While we strive to ensure that Evolve is available at all times, we
          cannot guarantee uninterrupted or error-free access. We may perform
          maintenance or updates that could result in temporary downtime.
        </p>

        <h2>6. User Conduct &amp; Responsibilities</h2>
        <h3>6.1 Content Standards</h3>
        <p>
          Users may post, link, store, or share data such as workout logs,
          notes, or other material (“Content”). You agree that any Content you
          post:
          <ul>
            <li>Does not violate any law or regulation.</li>
            <li>
              Does not infringe or misappropriate the intellectual property or
              privacy rights of any person or entity.
            </li>
            <li>
              Does not contain unlawful, threatening, abusive, harassing,
              defamatory, or otherwise objectionable material.
            </li>
          </ul>
        </p>
        <h3>6.2 Prohibited Activities</h3>
        <p>
          You agree not to:
          <ul>
            <li>
              Impersonate any person or entity, or submit false or misleading
              information.
            </li>
            <li>
              Attempt to gain unauthorized access to another user’s account or
              the Service’s underlying technology.
            </li>
          </ul>
        </p>
        <h3>6.3 Ownership &amp; License</h3>
        <p>
          By posting Content to the Service, you grant Evolve a worldwide,
          non-exclusive, royalty-free license to use, modify, reproduce,
          display, adapt, and distribute your Content for purposes of providing
          and improving the Service. This license ends when your Content is
          deleted from our systems, except to the extent that the Content has
          been shared with others who have not deleted it, or it has been
          cached/stored by backup systems.
        </p>
        <p>
          Violation of these conduct standards may result in the suspension or
          termination of your account.
        </p>
        <h2>7. Intellectual Property</h2>
        <h3>7.1 Service Ownership</h3>
        <p>
          All materials, features, and functionality (including software, text,
          graphics, logos, designs, etc.) included in or made available through
          the Service are owned or licensed by Kolby Klassen. See also{" "}
          <a href="#credits">Section 16. Credits &amp; Attributions</a> below.
        </p>
        <h3>7.2 Trademarks</h3>
        <p>
          Evolve Workout Tracker and associated logos are trademarks or trade
          dress of Kolby Klassen. You may not use our trademarks without written
          permission.
        </p>
        <h3>7.3 User Feedback</h3>
        <p>
          Any ideas, suggestions, or feedback you submit about the Service may
          be used by Evolve without notice, compensation, or acknowledgment to
          you, to the extent allowed under Canadian law.
        </p>

        <h2>8. Third-Party Links &amp; Integrations</h2>
        <h3>8.1 Links</h3>
        <p>
          The Service may contain links to or integrations with third-party
          websites or services (e.g., Apple Health or Google Fit). Evolve does
          not control or endorse any third-party content or services.
        </p>
        <h3>8.2 Data &amp; Permissions</h3>
        <p>
          If you enable health or fitness integrations, such as Apple Health or
          Google Fit, the data shared or accessed from those platforms will be
          used as set forth in the <Link to="/privacy">Privacy Policy</Link>.
        </p>
        <p>
          Evolve is <strong>not</strong> liable for any actions, products, or
          services provided by third parties. Your use of such third-party
          services is at your own risk and subject to the terms and conditions
          of those third parties.
        </p>

        <h2 id="medical">9. Medical Disclaimer</h2>
        <h3>9.1 No Medical Advice</h3>
        <p>
          The workouts, information, and suggestions provided by Evolve are not
          intended as medical advice. Always consult a qualified medical
          professional before beginning any exercise, diet, or nutrition plan,
          especially if you have a pre-existing medical condition or injury.
        </p>
        <h3>9.2 Assumption of Risk</h3>
        <p>
          Participation in any fitness activity carries inherent risks of injury
          or death. By using Evolve, you acknowledge and assume all such risks,
          whether known or unknown, and agree that Evolve is not liable for any
          resulting injury or fatality.
        </p>

        <h2>10. Limitation of Liability</h2>
        <h3>10.1 Disclaimer of Warranties</h3>
        <p>
          The Service is provided on an “AS IS” and “AS AVAILABLE” basis without
          warranties of any kind, either express or implied. To the fullest
          extent permitted by law, Evolve disclaims all warranties, including,
          without limitation, implied warranties of merchantability and fitness
          for a particular purpose.
        </p>
        <h3>10.2 No Guarantee</h3>
        <p>
          We do not guarantee that the Service will always be safe, secure,
          uninterrupted, or error-free, or that it will meet your expectations
          or requirements.
        </p>
        <h3>10.3 Liability Cap</h3>
        <p>
          To the fullest extent permitted by law, in no event shall Evolve or
          its affiliates, officers, employees, agents, or partners be liable for
          any indirect, incidental, special, consequential, or punitive damages,
          including loss of profits, data, or goodwill, arising from or related
          to your use or inability to use the Service.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Evolve, its
          affiliates, officers, employees, agents, and partners from and against
          any claims, liabilities, damages, losses, costs, or expenses
          (including reasonable legal fees) arising out of or in connection with
          (a) your breach of these Terms; (b) any Content you upload, post, or
          otherwise transmit through the Service; or (c) your violation of any
          third-party rights.
        </p>

        <h2>12. Termination</h2>
        <h3>12.1 Termination by You</h3>
        <p>
          You may stop using the Service or delete your account at any time.
        </p>
        <h3>12.2 Termination by Evolve</h3>
        <p>
          We may suspend or terminate your access to the Service immediately if
          you violate these Terms or if we decide to discontinue the Service.
        </p>
        <h3>12.3 Effect of Termination</h3>
        <p>
          Upon termination, your right to use the Service ends immediately. The
          sections on intellectual property, disclaimers, limitation of
          liability, and indemnification will survive termination of these
          Terms. If you have an active Evolve Pro membership when you delete
          your account, you remain responsible for canceling your Apple
          subscription.
        </p>

        <h2>13. Changes to the Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time at our sole
          discretion. If we make material changes, we will provide advance
          notice, such as via email or an in-app announcement. Continued use of
          the Service after changes become effective constitutes acceptance of
          the revised Terms. More details can be found in the Privacy Policy:{" "}
          <a href={"/privacy#policy-changes"}>Policy Changes</a> section.
        </p>

        <h2>14. Governing Law &amp; Dispute Resolution</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the Province of Alberta and the federal laws of Canada applicable
          therein, without regard to conflict of law principles. By using the
          Service, you agree to submit to the exclusive jurisdiction of the
          courts located in Alberta, Canada to resolve any disputes arising out
          of or relating to these Terms or the Service.
        </p>

        <h2>15. Miscellaneous</h2>
        <h3>15.1 Entire Agreement</h3>
        <p>
          These Terms, together with the{" "}
          <Link to="/privacy">Privacy Policy</Link>, constitute the entire
          agreement between you and Evolve regarding your use of the Service and
          supersede all prior or contemporaneous communications, whether
          electronic, oral, or written.
        </p>
        <h3>15.2 No Waiver</h3>
        <p>
          Our failure to enforce any right or provision of these Terms shall not
          be deemed a waiver of such right or provision.
        </p>
        <h3>15.3 Severability</h3>
        <p>
          If any provision of these Terms is found to be unlawful, void, or
          unenforceable, that provision will be severable and will not affect
          the validity and enforceability of the remaining provisions.
        </p>
        <h3>15.4 Assignment</h3>
        <p>
          You may not assign or transfer your rights or obligations under these
          Terms without our prior written consent. We may assign or transfer
          these Terms at our discretion.
        </p>

        <h2>16. Credits &amp; Attributions</h2>
        <h3>16.1 Exercise Videos</h3>
        <p>
          All exercise videos featured in the Service are credited to the
          original creator, Gym Visual / © 2023 Aliaksandr Makatserchyk. Evolve
          has purchased the videos under a Non-Exclusive Commercial Royalty-Free
          License (N-CRFL). For more information, visit{" "}
          <a href="https://gymvisual.com/" target="_blank">
            Gym Visual
          </a>
          .
        </p>
        <h3>16.2 Icons &amp; Graphics</h3>
        <p>
          We incorporate icons from third-party creators, including icons by{" "}
          <a
            href="https://www.flaticon.com/packs/muscles-14228732"
            target="_blank"
          >
            cube29 - Flaticon
          </a>
          .
        </p>
        <h3>16.3 Apple Trademark</h3>
        <p>
          The Apple App Store logo is a trademark of Apple Inc. Use is subject
          to Apple’s brand guidelines.
        </p>

        <hr style={{ width: "50%" }} />
        <p>
          <strong>
            If you have any concerns or questions about licensing or
            attribution, please contact us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
              {SUPPORT_EMAIL_ADDRESS}
            </a>
          </strong>
          .
        </p>

        <h2>17. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us by
          email:{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;

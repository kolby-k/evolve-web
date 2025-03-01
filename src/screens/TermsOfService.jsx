import React from "react";
import styles from "../styles/TOS.module.css";
import useScrollToTop from "../hooks/useScrollToTop";
import { Link } from "react-router-dom";

const TERMS_LAST_UPDATED = "February 27, 2025";
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
        <p>
          These Terms of Service ("Terms") constitute a legal agreement between
          you ("you," "your," or "User") and Kolby Klassen ("me," "I," or "my")
          regarding your use of the Evolve Workout Tracker mobile application,
          website, and related services (collectively, the "Service", "App", or
          "Evolve").
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms.{" "}
          <strong>
            If you do not agree with any part of these Terms, you must
            discontinue use of the Service.
          </strong>
        </p>

        <h2>1. Acceptance of Terms</h2>
        <ol>
          <li>
            By creating an account or otherwise using my Service, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms, as well as the{" "}
            <Link to={"/privacy"}>Privacy Policy</Link> which is incorporated
            herein by reference.
          </li>
          <li>
            If you do not agree with any portion of these Terms, you may not
            access or use my Service.
          </li>
        </ol>

        <h2>2. Description of the Service</h2>
        <p>Evolve is owned and operated by Kolby Klassen.</p>
        <p>
          Evolve is a workout logging application that enables Users to record
          workout activities, track fitness progress, and view personalized
          workout analytics. Users can opt for a free version or subscribe to a
          paid membership tier offering enhanced features.
        </p>
        <p>
          <strong>Important Disclaimer:</strong> Evolve Workout Tracker is{" "}
          <strong>not</strong> a medical or healthcare service and does{" "}
          <strong>not</strong> provide medical advice. The activities,
          recommendations, or other information offered by Evolve are for
          informational purposes only. Always consult your physician or a
          qualified health professional before starting any exercise program
          (see also <a href={"#medical"}>Section 9. Medical Disclaimer</a>{" "}
          below).
        </p>

        <h2>3. Eligibility</h2>
        <ol>
          <li>
            You must be at least the age of majority in your jurisdiction to
            create an account or otherwise use the Service. If you are a minor
            (under 18 or under the age of majority in your jurisdiction), you
            must only use the Service with the involvement and consent of a
            parent or legal guardian.
          </li>
          <li>
            I do not knowingly collect or solicit Personal Data from anyone
            under the age of 13. If you believe a child under the age of 13 has
            provided me with Personal Data, please contact me at{" "}
            <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
              {SUPPORT_EMAIL_ADDRESS}
            </a>{" "}
            and I will take steps to delete such information.
          </li>
        </ol>

        <h2>4. Accounts &amp; Registration</h2>
        <ol>
          <li>
            <strong>Account Creation:</strong> You may be required to create an
            account to access certain features of the Service. You agree to
            provide accurate, current, and complete information during
            registration.
          </li>
          <li>
            <strong>Account Security:</strong> You are solely responsible for
            safeguarding the login credentials (e.g., password) that you use to
            access the Service and for any activities under your credentials.
            Notify me immediately at{" "}
            <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
              {SUPPORT_EMAIL_ADDRESS}
            </a>{" "}
            if you suspect any unauthorized use of your account.
          </li>
          <li>
            <strong>Account Termination:</strong> I may suspend or terminate
            your account if I suspect that you have violated these Terms. You
            can also delete your account at any time by contacting me at{" "}
            <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
              {SUPPORT_EMAIL_ADDRESS}
            </a>
            .
          </li>
        </ol>

        <h2>5. Subscription &amp; Payments</h2>
        <ol>
          <li>
            <strong>Free and Premium Tiers:</strong> Evolve offers both a free
            version with limited features and a premium (“Pro”) tier with
            additional or enhanced features. The premium tier is available
            through in-app purchases on a monthly or annual subscription basis.
            Pricing and subscription details are provided within the Service.
          </li>
          <li>
            <strong>Billing:</strong> Payment processing is handled by Apple,
            and you will be charged to your app-store account (e.g., Apple App
            Store) at the time of purchase. Your subscription will automatically
            renew unless auto-renew is turned off at least 24 hours before the
            end of the current period.
          </li>
          <li>
            <strong>Cancellation:</strong> You can manage subscriptions and
            cancel auto-renewal at any time through your app-store account
            settings. Please review your local consumer rights and any
            applicable special refund laws as these may affect your cancellation
            process and refund eligibility.
          </li>
          <li>
            <strong>Changes in Pricing:</strong> I reserve the right to change
            subscription fees at my discretion, and I will notify you in advance
            through email communications before any change takes effect.
            Continued use after such change indicates acceptance.
          </li>
          <li>
            <strong>Service Availability:</strong> While I strive to ensure that
            Users can access Evolve at all times, I cannot guarantee
            uninterrupted or future access to the Service.
          </li>
        </ol>

        <h2>6. User Conduct &amp; Responsibilities</h2>
        <ol>
          <li>
            <strong>Content:</strong> Users may post, link, store, or share data
            such as workout logs, notes, or other material ("Content"). You
            agree that any Content you post:
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
          </li>
          <li>
            <strong>Prohibited Activities:</strong>
            <ul>
              <li>
                Impersonating any person or entity, or submitting false or
                misleading information.
              </li>
              <li>
                Attempting to gain unauthorized access to another user’s account
                or the Service’s underlying technology.
              </li>
            </ul>
          </li>
          <li>
            <strong>Ownership &amp; License:</strong> By posting Content to the
            Service, you grant Evolve a worldwide, non-exclusive, royalty-free
            license to use, modify, reproduce, display, adapt, and distribute
            your Content for purposes of providing and improving the Service.
            This license ends when your Content is deleted from my systems,
            except to the extent that the Content has been shared with others
            who have not deleted it, or it has been cached/stored by backup
            systems.
          </li>
        </ol>
        <p>
          Violation of the outlined user conduct and responsibilities may result
          in the suspension or termination of your account.
        </p>

        <h2>7. Intellectual Property</h2>
        <ol>
          <li>
            <strong>Service Ownership:</strong> All materials, features, and
            functionality (including software, text, graphics, logos, designs,
            etc.) included in or made available through the Service are owned or
            licensed by Kolby Klassen (see also{" "}
            <a href={"#credits"}>Section 16. Credits &amp; Attributions</a>{" "}
            below).
          </li>
          <li>
            <strong>Trademarks:</strong> Evolve Workout Tracker and associated
            logos are trademarks or trade dress of Kolby Klassen/Evolve. You may
            not use my trademarks without written permission.
          </li>
          <li>
            <strong>User Feedback:</strong> Any ideas, suggestions, or feedback
            you submit about the Service may be used by Evolve without notice,
            compensation, or acknowledgment to you, to the extent allowed under
            Canadian law.
          </li>
        </ol>

        <h2>8. Third-Party Links &amp; Integrations</h2>
        <p>
          Evolve may offer you the option to use, view, or interact with
          third-party content and services, such as Apple Health or Google Fit.
          However, Evolve is not responsible for any third-party content.
        </p>

        <ol>
          <li>
            <strong>Links:</strong> The Service may contain links to or
            integrations with third-party websites or services (e.g., Apple
            Health or Google Fit). Evolve does not control or endorse any
            third-party content or services.
          </li>
          <li>
            <strong>Data &amp; Permissions:</strong> If you enable health or
            fitness integrations, such as Apple Health or Google Fit, the data
            shared or accessed from those platforms will be used as set forth in
            the <Link to={"/privacy"}>Privacy Policy</Link>.
          </li>
        </ol>
        <p>
          Evolve is <strong>not</strong> liable for any actions, products, or
          services provided by third parties. Your use of such third-party
          services is at your own risk and subject to the terms and conditions
          established by those third parties.
        </p>

        <h2 id="medical">9. Medical Disclaimer</h2>
        <p>
          The Service does not provide health or medical advice. You are solely
          responsible for understanding your physical limitations and seeking
          professional guidance as needed.
        </p>
        <ol>
          <li>
            <strong>No Medical Advice:</strong> The workouts, information, and
            suggestions provided by Evolve are not intended as medical advice.
            Always consult a qualified medical professional before beginning any
            exercise, diet, or nutrition plan, especially if you have a
            pre-existing medical condition or injury.
          </li>
          <li>
            <strong>Assumption of Risk:</strong> Participation in any fitness
            activity carries inherent risks of injury or death. By using Evolve,
            you acknowledge and assume all such risks, whether known or unknown,
            and agree that Evolve is not liable for any resulting injury or
            fatality.
          </li>
        </ol>

        <h2>10. Limitation of Liability</h2>
        <ol>
          <li>
            <strong>Disclaimer of Warranties:</strong> The Service is provided
            on an “AS IS” and “AS AVAILABLE” basis without warranties of any
            kind, either express or implied. To the fullest extent permitted by
            law, Evolve disclaims all warranties, including, without limitation,
            implied warranties of merchantability and fitness for a particular
            purpose.
          </li>
          <li>
            <strong>No Guarantee:</strong> I do not guarantee that the Service
            will always be safe, secure, uninterrupted, or error-free, or that
            it will meet your expectations or requirements.
          </li>
          <li>
            <strong>Liability Cap:</strong> To the fullest extent permitted by
            law, in no event shall Evolve (or its affiliates, officers,
            employees, agents, or partners) be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            loss of profits, data, or goodwill, arising from or related to your
            use of or inability to use the Service.
          </li>
          <li>
            <strong>Jurisdictional Variation:</strong> Some jurisdictions do not
            allow the limitation of certain warranties or liabilities. If the
            laws of your jurisdiction do not allow such limitations, these
            limitations may not apply to you. In such cases, liability is
            limited to the maximum extent permitted by applicable law.
          </li>
        </ol>

        <h2>11. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Kolby Klassen and
          the Service provided, from and against any claims, liabilities,
          damages, losses, costs, or expenses (including reasonable legal fees)
          arising out of or in connection with (a) your breach of these Terms;
          (b) any content you upload, post, or otherwise transmit through the
          Service; or (c) your violation of any third-party rights.
        </p>

        <h2>12. Termination</h2>
        <ol>
          <li>
            <strong>Termination by You:</strong> You may stop using the Service
            or delete your account at any time.
          </li>
          <li>
            <strong>Termination by Evolve:</strong> I may suspend or terminate
            your access to the Service immediately if you violate these Terms or
            if I decide to discontinue the Service.
          </li>
          <li>
            <strong>Effect of Termination:</strong> Upon termination, your right
            to use the Service ceases immediately. Provisions regarding
            intellectual property, disclaimers, limitation of liability, and
            indemnification survive any termination of these Terms.
          </li>
        </ol>

        <h2>13. Changes to the Terms</h2>
        <p>
          I reserve the right to modify these Terms at any time at my sole
          discretion. If I make material changes, I will provide notice in
          advance. More details can be found in the Privacy Policy:{" "}
          <a href={"/privacy#policy-changes"}>Policy Changes</a> section.
        </p>
        <p>
          By continuing to use the Service after changes become effective, your
          agreement to the revised Terms will be implied.
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
        <ol>
          <li>
            <strong>Entire Agreement:</strong> These Terms, together with the{" "}
            <Link to={"/privacy"}>Privacy Policy</Link>, constitute the entire
            agreement between you and Kolby Klassen, including your usage of
            Evolve. These Terms supersede all prior or contemporaneous
            communications, whether electronic, oral, or written.
          </li>
          <li>
            <strong>No Waiver:</strong> My failure to enforce any right or
            provision of these Terms shall not be deemed a waiver of those
            rights.
          </li>
          <li>
            <strong>Severability:</strong> If any provision of these Terms is
            found to be unlawful, void, or unenforceable, that provision shall
            be severable and shall not affect the validity and enforceability of
            the remaining provisions.
          </li>
          <li>
            <strong>Assignment:</strong> You may not assign or transfer your
            rights or obligations under these Terms without my prior written
            consent.
          </li>
        </ol>

        <h2 id="credits">16. Credits &amp; Attributions</h2>
        <p>
          Certain elements used in the Service are licensed or used with
          permission as detailed below. I greatly appreciate the effort these
          creators put into their work.
        </p>
        <ol>
          <li>
            <strong>Exercise Videos</strong>: All exercise videos featured in
            the Service are credited to the original creator, Gym Visual / ©
            2023 Aliaksandr Makatserchyk. Evolve has purchased the videos and
            are used under the Non-Exclusive Commercial Royalty-Free License
            (N-CRFL). For more information please visit{" "}
            <a href="https://gymvisual.com/">Gym Visual</a>.
          </li>
          <li>
            <p>
              <strong>Icons &amp; Graphics</strong>: I incorporate icons from
              third-party creators, including icons created by{" "}
              <a href="https://www.flaticon.com/packs/muscles-14228732">
                cube29 - Flaticon
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              <strong>Apple</strong>: The Apple App Store logo is a trademark of
              Apple Inc.
            </p>
          </li>
        </ol>
        <p>
          If you have any concerns or questions about how I license or attribute
          these assets, please contact me at{" "}
          <a href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}>
            {SUPPORT_EMAIL_ADDRESS}
          </a>
          .
        </p>

        <h2>17. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact me.
          <br />
          <strong>Email:</strong> <strong>{SUPPORT_EMAIL_ADDRESS}</strong>
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;

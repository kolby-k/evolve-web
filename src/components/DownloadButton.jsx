import React from "react";
import styles from "../styles/Buttons.module.css";

function DownloadButton({ type = "primary" }) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={type === "primary" ? styles.button : styles.buttonSecondary}
      >
        Download Now
      </button>
    </div>
  );
}

export default DownloadButton;

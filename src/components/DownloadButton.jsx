import React from "react";
import styles from "../styles/Buttons.module.css";

function DownloadButton({ type = "primary" }) {
  return (
    <button
      className={type === "primary" ? styles.button : styles.buttonSecondary}
    >
      Download Now
    </button>
  );
}

export default DownloadButton;

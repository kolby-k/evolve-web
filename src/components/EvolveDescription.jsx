import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import DownloadButton from "./DownloadButton";

function EvolveDescription() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.descriptionContainer} ${
        isVisible ? styles.fadeIn : ""
      }`}
    >
      <h3 className={styles.heading}>
        Track every workout. Discover new exercises. Build consistent routines.
        Gain performance insights.
        <span className={styles.headingHighlight}>
          {" "}
          And much more to discover...
        </span>
      </h3>
      <div className={styles.descriptionButtonContainer}>
        <DownloadButton type="secondary" />
      </div>
    </div>
  );
}

export default EvolveDescription;

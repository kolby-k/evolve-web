import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Description.module.css";

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
      className={`${styles.descriptionSection} ${
        isVisible ? styles.fadeIn : ""
      }`}
    >
      <h3>
        Track every workout. Discover new exercises. Build consistent routines.
        Review performance & insights.
        <span> Get started for free.</span>
      </h3>
    </div>
  );
}

export default EvolveDescription;

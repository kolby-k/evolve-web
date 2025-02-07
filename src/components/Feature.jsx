import React from "react";
import styles from "../styles/Features.module.css";

function Feature({ content = {}, layout = "right", idx }) {
  if (!content)
    return (
      <div>
        <h1>Feature Not Found!</h1>
      </div>
    );

  return (
    <>
      {layout === "right" ? (
        <div className={styles.containerRight}>
          <div className={styles.imageContainer}>
            <img
              src={content.imageSource}
              className={styles.imageStyle}
              style={idx === 2 ? { marginRight: 50 } : {}}
            />
          </div>
          <div className={styles.textContainer}>
            <h4 className={styles.featureTitle}>{content.title}</h4>
            <ul className={styles.featureList}>
              {content.description.map((d, index) => {
                return (
                  <li key={index} className={styles.description}>
                    {d}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.containerLeft}>
          <div className={styles.textContainer}>
            <h4 className={styles.featureTitle}>{content.title}</h4>
            <ul className={styles.featureList}>
              {content.description.map((d, index) => {
                return (
                  <li key={index} className={styles.description}>
                    {d}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <img src={content.imageSource} className={styles.imageStyle} />
          </div>
        </div>
      )}
    </>
  );
}

export default Feature;

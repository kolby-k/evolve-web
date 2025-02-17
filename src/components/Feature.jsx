import React from "react";
import styles from "../styles/Home.module.css";

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
        <div className={styles.feature}>
          <div className={styles.featureImageContainer}>
            <img
              src={content.imageSource}
              className={styles.largeFeatureImage}
            />
            <img
              src={content.secondarySource}
              className={styles.smallFeatureImage}
            />
          </div>
          <div className={styles.featureTextContainer}>
            <h4>{content.title}</h4>
            <ul>
              {content.description.map((d, index) => {
                return <li key={index}>{d}</li>;
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.feature}>
          <div className={styles.featureTextContainer}>
            <h4>{content.title}</h4>
            <ul>
              {content.description.map((d, index) => {
                return <li key={index}>{d}</li>;
              })}
            </ul>
          </div>
          <div className={styles.featureImageContainer}>
            <img
              src={content.imageSource}
              className={styles.largeFeatureImage}
            />
            <img
              src={content.secondarySource}
              className={styles.smallFeatureImage}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Feature;

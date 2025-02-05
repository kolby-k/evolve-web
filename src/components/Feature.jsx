import React from "react";
import styles from "../styles/Features.module.css";

function Feature({ content = {}, layout = "right" }) {
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
            <img src={content.imageSource} className={styles.imageStyle} />
          </div>
          <div className={styles.textContainer}>
            <h4 className={styles.title}>{content.title}</h4>
            <ul className={styles.featureList}>
              {content.description.map((d) => {
                return <li className={styles.description}>{d}</li>;
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.containerLeft}>
          <div className={styles.textContainer}>
            <h4 className={styles.title}>{content.title}</h4>
            <ul className={styles.featureList}>
              {content.description.map((d) => {
                return <li className={styles.description}>{d}</li>;
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

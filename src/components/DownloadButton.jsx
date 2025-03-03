import React from "react";

function DownloadButton({ styles }) {
  return (
    <a href={import.meta.env.VITE_PUBLIC_EVOLVE_APP_STORE_URL} target="_blank">
      <button className={styles}>Download Now</button>
    </a>
  );
}

export default DownloadButton;

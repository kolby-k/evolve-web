import React from "react";
import appStoreBadge from "../assets/app-store-badge.svg";

function AppStoreIcon() {
  return (
    <a
      href={import.meta.env.VITE_PUBLIC_EVOLVE_APP_STORE_URL}
      className="appStoreLink"
      target="_blank"
    >
      <img className="appStoreIcon" src={appStoreBadge} />
    </a>
  );
}

export default AppStoreIcon;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const { pathname, hash } = useLocation();   // ← grab both

  useEffect(() => {
    // If the URL has an anchor (#fragment), let the browser handle it.
    if (!hash || hash === "#") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // or "smooth"
    }
    // To support browsers/routers that DON'T auto‑scroll
    // to the anchor, call:
    if (hash) document.querySelector(hash)?.scrollIntoView();
  }, [pathname, hash]);
}
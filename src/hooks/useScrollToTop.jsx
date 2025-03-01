import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
  const path = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
}

export default useScrollToTop;

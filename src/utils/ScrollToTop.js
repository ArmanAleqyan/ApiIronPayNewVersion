import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const main = document.querySelector(".main");
    setTimeout(() => {
      wrapper.scrollTo({ top: 0, behavior: "smooth" });
      main.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

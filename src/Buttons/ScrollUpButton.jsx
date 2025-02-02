import React, { useEffect, useState } from "react";
import "./Buttons.css";
import scrollupIcon from '../assets/scrollup.png';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 150);
  };

  const scrollToTop = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      window.scrollTo(0, currentScroll - currentScroll / 3);
      window.requestAnimationFrame(scrollToTop); // повторный вызов для плавного скролла
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button id="scrollToTopBtn" onClick={scrollToTop}>
          <img width="33px" id="scrollupbut" src={scrollupIcon} alt="Scroll Up" />
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;

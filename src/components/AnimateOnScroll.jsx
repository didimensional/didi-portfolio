import React, { useState, useEffect, useRef } from "react";

const AnimateOnScroll = ({ children, animationClass }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 transform ${
        hasAnimated ? animationClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;

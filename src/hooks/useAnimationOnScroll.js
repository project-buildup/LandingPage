import { useState, useEffect } from 'react';

export const useAnimationOnScroll = () => {
  const [element, setElement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const onIntersection = (entries) => {
    if (isVisible) return;

    const [entry] = entries;

    if (entry.isIntersecting) {
      setIsVisible(true);
    } else if (entry.boundingClientRect.y < 0) {
      setIsVisible(true);
    } else {
      //setIsVisible(false); 화면에서 사라지면 false
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, { threshold: 0.1 });
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [element]);

  return [setElement, isVisible];
};

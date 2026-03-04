import { useEffect, useRef } from "react";

const useScrollTextEffect = (options = {}) => {
  const ref = useRef(null);
  const { delay = 0, once = true } = options;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const originalText = element.innerText;
    element.dataset.value = originalText;

    const scramble = () => {
      let iterations = 0;

      const interval = setInterval(() => {
        element.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " "; // preserve spaces
            return index < iterations
              ? originalText[index]
              : letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iterations >= originalText.length) {
          clearInterval(interval);
          element.innerText = originalText; // restore exactly
        }

        iterations += 1 / 2;
      }, 30); // faster than hover version for scroll feel
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(scramble, delay);
          if (once) observer.unobserve(element);
        }
      },
      { threshold: 1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, once]);

  return ref;
};

export default useScrollTextEffect;
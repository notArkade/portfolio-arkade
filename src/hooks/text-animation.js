import { useEffect, useRef } from "react";

const useHoverTextEffect = () => {
  const ref = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.dataset.value = element.innerText;

    element.onmouseover = (event) => {
      let iterations = 0;
      const originalText = event.target.dataset.value;

      const interval = setInterval(() => {
        event.target.innerText = originalText
          .split("")
          .map((letter, index) =>
            index < iterations
              ? originalText[index]
              : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("");

        if (iterations >= originalText.length) clearInterval(interval);

        iterations += 1 / 5;
      }, 100);
    };
  }, []);

  return ref;
};

export default useHoverTextEffect;

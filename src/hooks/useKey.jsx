import React from "react";

function useKey(key, fn) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        fn();
      } else if (Array.isArray(key) && key.includes(event.key)) {
        fn();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [key, fn]);
}

export default useKey;

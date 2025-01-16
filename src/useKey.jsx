import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callBack);

      // Cleaning up event listeners that would otherwise accumulate exessively
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [action, key]
  );
}

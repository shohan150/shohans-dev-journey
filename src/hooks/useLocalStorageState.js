import { useEffect, useState } from "react";

function useLocalStorageState(key, defaultValue) {

  // calling useState
  const [state, setState] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? JSON.parse(savedValue) : defaultValue;
  });

  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
  }

 export default useLocalStorageState;
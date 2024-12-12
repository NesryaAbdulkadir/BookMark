import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(parsedValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

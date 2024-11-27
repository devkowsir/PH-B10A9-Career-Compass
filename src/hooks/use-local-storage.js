import React, { useEffect, useState } from "react";

export const useLocalStorage = ({ key, initial }) => {
  key = "career-compass-" + key;
  const storedData = localStorage.getItem(key);
  const [data, setData] = useState(JSON.parse(storedData) ?? initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};

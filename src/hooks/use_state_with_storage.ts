import { useState } from 'react';

export const useStateWithStorage = (
  init: string,
  key: string
): [string, (s: string) => void] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || '');

  const setValueWithStorage = (nextValue: string) => {
    setValue(nextValue);
    localStorage.setItem(key, nextValue);
  };

  return [value, setValueWithStorage];
};

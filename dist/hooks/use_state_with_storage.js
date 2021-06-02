import { useState } from 'react';
export const useStateWithStorage = (init, key) => {
    const [value, setValue] = useState(localStorage.getItem(key) || '');
    const setValueWithStorage = (nextValue) => {
        setValue(nextValue);
        localStorage.setItem(key, nextValue);
    };
    return [value, setValueWithStorage];
};

import { useState, useEffect } from 'react'

// hook for storing retrieving and storing object in local storage
export default function useStickyState(defaultValue, key) {
    // setup state tracking with useState
    const [value, setValue] = useState(() => {
        // get existing object from local storage, or default
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null
            ? JSON.parse(stickyValue)
            : defaultValue;
    });

    // run this hook when key or value change
    //  update local storage with newest key/value
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // 
    return [value, setValue];
}
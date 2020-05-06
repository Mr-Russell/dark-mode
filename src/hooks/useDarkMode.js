import useLocalStorage from './useLocalStorage.js';
import {useEffect} from 'react';

const useDarkMode = (isEnabled) =>{
    const [someValue, setSomeValue] = useLocalStorage(isEnabled, false);

    useEffect(()=>{
        if (someValue === true){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [someValue])

    const setValue = value =>{
        setSomeValue(value);
        window.localStorage.setItem(isEnabled, JSON.stringify(value));
    }

    return [someValue, setValue]
};

export default useDarkMode;
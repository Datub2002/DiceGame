import React from 'react';
import { useState, createContext } from 'react';


 const themeContext = createContext();

function ThemeProvider({ children }) {
    const [Theme,setTheme] = useState('dark');

    const handleTheme = () =>{
        setTheme(Theme === 'dark' ? 'white' : 'dark')
        console.log(Theme);
    }
    const value = {
        Theme,
        handleTheme
    }

    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
            
    );
}

export {ThemeProvider,themeContext };
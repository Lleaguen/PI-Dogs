import React, { createContext, useContext, useState } from "react";

const themeStyles={
    dark: {
        background: '#282c34',
        textColor:'white'
    },
    light:{
        background: 'white'
    }
}

const ThemeContext = createContext();

function ThemeProvider(props){
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');
    const value = { theme: themeStyles[theme], toggleTheme };
    return <ThemeContext.Provider value={value} {...props} />;
}
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme }
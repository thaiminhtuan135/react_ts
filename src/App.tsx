import React, {useState, useEffect, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from "./Content";

type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<ThemeContextType>('light');
console.log(ThemeContext);
function App() {
    const [theme, setTheme] = useState<ThemeContextType>('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className="App">
            <ThemeContext.Provider value={theme}>
                <button onClick={toggleTheme}>Toggle theme</button>
                <Content/>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;

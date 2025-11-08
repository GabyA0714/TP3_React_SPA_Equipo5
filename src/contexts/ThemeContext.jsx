import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); 

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme'); 
    
    if (theme === 'light') {
      body.classList.add('light-theme');
    } else {
    //    body.classList.add('dark-theme');
    }

    localStorage.setItem('theme', theme);

  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
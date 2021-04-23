import React, {useState, useContext, createContext, useEffect} from 'react';
import {LayoutAnimation, useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

ThemeContext.displayName = 'ThemeContext';

const ThemeProvider = props => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState();

  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');

        setTheme(savedTheme || colorScheme);
      } catch {
        // no error handling
      }
    };

    getTheme();
  }, [colorScheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    AsyncStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
      {...props}
    />
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context || {};
};

export {ThemeProvider, useTheme};

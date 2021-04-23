/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, StatusBar, Text, View} from 'react-native';
import AppProviders from './context';
import {useTheme} from './context/theme';

const Home = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === 'dark' ? '#161E23' : '#FFFFFF',
        justifyContent: 'center',
      }}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: theme === 'dark' ? '#FFFFFF' : '#0D2B3A',
          marginBottom: 20,
        }}>
        {theme.charAt(0).toUpperCase() + theme.slice(1)} mode
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const App = () => (
  <AppProviders>
    <Home />
  </AppProviders>
);

export default App;

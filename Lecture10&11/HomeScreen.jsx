import React, { useContext } from 'react';
import { Text, Button, View } from 'react-native';
import { ThemeContext }  from './ThemeProvider';

// For ContextAPI Example -> Consume Context 
const HomeScreen = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: isDarkTheme ? 'black' : 'white' }}>
      <Text style={{ color: isDarkTheme ? 'white' : 'black' }}>
        Current Theme: {isDarkTheme ? 'Dark' : 'Light'}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

export default HomeScreen;
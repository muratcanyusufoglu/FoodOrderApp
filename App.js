import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/pages/homePage';
import LoadingScreen from './src/components/pages/locationPage';

const Stack = createNativeStackNavigator();

function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen}/>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/pages/homePage';
import LoadingScreen from './src/components/pages/locationPage';
import {Provider} from 'react-redux';
import store from './src/redux/store';


const Stack = createNativeStackNavigator();

function App() {
  return(
  <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen}/>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

export default App;
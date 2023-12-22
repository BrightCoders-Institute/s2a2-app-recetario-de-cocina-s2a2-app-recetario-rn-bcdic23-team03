import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailFood from './screen/DetailScreen';
import HomeScreen from './screen/HomeScreen';
import { LogBox } from 'react-native';

// Define los tipos para los parámetros de tus rutas si es necesario
export type RootStackParamList = {
  Home: undefined;
  DetailFood: undefined; // Ajusta los parámetros según sean necesarios para cada pantalla
};

const Stack = createStackNavigator<RootStackParamList>();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Recetario',
          }} 
        />
        <Stack.Screen
          name="DetailFood"
          component={DetailFood}
          options={{
            headerShown: false,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

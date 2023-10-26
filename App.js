
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import login from './Telas/login';
import cadastro from './Telas/cadastro';
import recuperacao from './Telas/recuperacao';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="login">
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="recuperacao" component={recuperacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App;
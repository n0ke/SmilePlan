
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import login from './Telas/login';
import cadastro from './Telas/cadastro';
import recuperacao from './Telas/recuperacao';
import inicio from './Telas/Inicio';
//import consultas from './Telas/consultas';
import cadastroConsulta from './Telas/cadastroConsulta';
import { createTables } from './Telas//Banco_de_dados/db.js'; 



const Stack = createNativeStackNavigator();

function App() {

  React.useEffect(() => {
    createTables();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="inicio">
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="recuperacao" component={recuperacao} />
        <Stack.Screen name="inicio" component={inicio} />
        <Stack.Screen name="cadastroConsulta" component={cadastroConsulta} />
        {/* <Stack.Screen name="consultas" component={consultas} /> */}
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
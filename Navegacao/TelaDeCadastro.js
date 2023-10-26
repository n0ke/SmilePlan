// navigation.js

import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import TelaDeCadastro from './TelaDeCadastro';

const Stack = createStackNavigator();

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    TelaDeCadastro: {
      screen: TelaDeCadastro,
    },
  },
  {
    initialRouteName: 'Login', // Define a tela inicial
  }
);

export default createAppContainer(AppNavigator);

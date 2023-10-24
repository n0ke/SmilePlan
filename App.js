import { useState } from 'react';

import Login from '/Telas/login';
import Cadastro from '/Telas/cadastro';
import Recuperacao from '/Telas/recuperacao';
import { View, Text } from 'react-native';


export default function App() {
  const [telaAtual, setTelaAtual] = useState('Login');

  return (
    <View>
      <Text>OI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
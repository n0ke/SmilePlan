import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
//import { retrievePassword } from './Banco_de_dados/db.js'; // Importe a função de recuperação de senha

export default function Login() {
  const navigation = useNavigation();
  const [entradaUsuario, setEntradaUsuario] = useState('');
  const [entradaSenha, setEntradaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [visivel, setVisivel] = useState(false);

  const validaSenha = async () => {
    // Use a função de recuperação de senha para verificar se o usuário e a senha correspondem
    retrievePassword(entradaUsuario).then(password => {
      if (password === entradaSenha) {
        setMensagem('Senha correta!');
      } else {
        setMensagem('Usuário/Senha inválido.');
      }
      setVisivel(true);
    }).catch(error => {
      setMensagem('Erro ao validar usuário/senha.');
      setVisivel(true);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>

      <Text style={styles.textoUsuario}>LOGADO!</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
});

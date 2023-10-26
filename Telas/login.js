import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  TextInput,
  View,
  Button,
  ScrollView,
} from 'react-native';

export default function Login() {

  const navigation = useNavigation();
  const [visivel, setVisivel] = useState(false);
  const usuario = 'joao';
  const senha = '1234';
  const [entradaUsuario, setEntradaUsuario] = useState('');
  const [entradaSenha, setEntradaSenha] = useState('');
  const [texto, setTexto] = useState('');

  function validaSenha() {
    if (entradaUsuario === usuario && entradaSenha === senha) {
      setTexto('Senha correta!');
    } else {
      setTexto('Usuário/Senha inválido.');
    }
    setVisivel(true);
  }

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <View style={styles.viewLogo}>
        <Image
          style={styles.logo}
          source={require('./assets/Logo-Smile-Plan-Azul.png')}
        />
      </View>

      <Text style={styles.textoUsuario}>Usuário</Text>

      <TextInput
        style={styles.caixaDeTextoUsuario}
        placeholder="Digite seu usuário"
        autoCorrect={false}
        onChangeText={(valor) => setEntradaUsuario(valor)}
      />

      <Text style={styles.textoSenha}>Senha</Text>

      <TextInput
        style={styles.caixaDeTextoSenha}
        placeholder="Digite sua senha"
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(valor) => setEntradaSenha(valor)}
      />

      <Text style={styles.esqueceuSenha}>
        Esqueceu a senha?
        <TouchableOpacity onPress={() => navigation.navigate('recuperacao')}>
          <Text style={styles.cliqueAqui}> Clique Aqui</Text>
        </TouchableOpacity>
      </Text>

      <TouchableOpacity style={styles.btnEntrar} onPress={validaSenha}>
        <Text style={styles.txtEnviar}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.rodapeCadastro}>
        <Text style={styles.txtEnviar}>
          Não Possui uma Conta?
          <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
            <Text style={styles.cadastreSe}> Cadastre-se!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F7F3',
    width: '100%', // Defina a largura como 100%
    padding: 16,
  },
  logo: {
      height: 79,
      width: 294,
      marginTop: 100,
    },
  textoUsuario: {
    fontSize: 20,
    marginBottom: 10,
  },
  textoSenha: {
    fontSize: 20,
    marginBottom: 10,
  },
  caixaDeTextoUsuario: {
    backgroundColor: '#F8F7F3',
    width: '90%',
    marginBottom: 20,
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
  },
  caixaDeTextoSenha: {
    backgroundColor: '#F8F7F3',
    width: '90%',
    marginBottom: 20,
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
  },
  esqueceuSenha: {
    color: '#00CCCB',
    marginBottom: 20,
  },
  cliqueAqui: {
    color: '#00CCCB',
  },
  btnEntrar: {
    backgroundColor: '#00CCCB',
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  rodapeCadastro: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#4F4F4F',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastreSe: {
    color: '#00CCCB',
  },
  txtEnviar: {
    color: '#FFF',
    fontSize: 20,
  },
  viewLogo: {
    marginBottom: 20,
  },
});

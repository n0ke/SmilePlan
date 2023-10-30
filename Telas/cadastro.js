import {
    Button,
    Image,
    KeyboardAvoidingView,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { useState } from 'react';
  import { insertUser } from './Banco_de_dados/db.js'; // Importe a função de inserção de usuário

  
  export default function cadastro() {

  const navigation = useNavigation();
  const [visivel, setVisivel] = useState(false);
  const [entradaNome, setNome] = useState('');
  const [entradaEmail, setEntradaEmail] = useState('');
  const [entradaSenha, setEntradaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const cadastrarUsuario = () => {
    if (entradaSenha !== confirmarSenha) {
      setMensagem('As senhas não coincidem.');
      setVisivel(true);
      return;
    }
    setVisivel(true);
  };

  function validaSenha() {
    if (entradaSenha === confirmarSenha) {
      // Senhas correspondem, então insere o usuário
      insertUser(entradaNome, entradaEmail, entradaSenha).then((result) => {
          // Ação em caso de sucesso na inserção do usuário
          navigation.navigate('inicio')
          // Outras ações em caso de sucesso...
          setVisivel(true); // Define visibilidade como true após a inserção do usuário
        })
        .catch((error) => {
          // Ação em caso de erro na inserção do usuário
          console.error('Erro ao inserir usuário:', error.message);
          // Outras ações em caso de erro...
          setVisivel(true); // Define visibilidade como true, mesmo em caso de erro
        });
    } else {
      console.log('Senhas não correspondem');
      setVisivel(true); // Define visibilidade como true, pois a validação da senha falhou
    }
  }
  
  
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View>
          <Modal animationType="slide" transparent={true} visible={visivel}>
            <View style={styles.bxModal}>
              <Text style={styles.txtModal}>{}</Text>
              <Button title="Fechar" onPress={() => setVisivel(false)} />
            </View>
          </Modal>
        </View>
  
        <View style={styles.viewLogo}>
          <Image
            style={styles.logo}
            source={require('./assets/Logo-Smile-Plan-Azul.png')}
            />
        </View>
  
        <Text style={styles.textoUsuario}>Criar Conta</Text>
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={(valor) => setNome(valor)}
        />

        <TextInput
          style={styles.caixaDeTexto}
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={(valor) => setEntradaEmail(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(valor) => setEntradaSenha(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Confirmar Senha"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(valor) => setConfirmarSenha(valor)}
        />
  
        <TouchableOpacity style={styles.btnCadastrar} onPress={validaSenha}>
          <Text style={styles.txtCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
  
        <View style={styles.rodapeCadastro}>
          <Text style={styles.txtRodape}>
            Já possui uma Conta?
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.facaLogin}> Faça login!</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F8F7F3',
      padding: 0,
      flex: 1,
    },
  
    viewLogo: {
      paddingTop: 0,
      paddingBottom: '20%',
      justifyContent: 'space-around',
    },
    logo: {
      paddingLeft: 0,
      height: 79,
      width: 294,
      marginTop: 100,
    },
  
    textoUsuario: {
      fontSize: 48,
      fontWeight: 'bold',
      marginBottom: 50,
      textAlign: 'center',
    },
  
    caixaDeTexto: {
      backgroundColor: '#F8F7F3',
      width: '90%',
      marginBottom: 10,
      fontSize: 20,
      borderRadius: 15,
      padding: 10,
      borderWidth: 1,
    },
  
    btnCadastrar: {
      backgroundColor: '#00CCCB',
      width: '30%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 70,
      marginTop: 30,
      marginBottom: 30,
    },
  
    txtCadastrar: {
      color: '#FFF',
      fontSize: 20,
    },
  
    rodapeCadastro: {
      backgroundColor: '#4F4F4F',
      width: '100%',
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 0,
      position: 'absolute',
      bottom: 0,
    },
  
    txtRodape: {
      color: '#FFF',
      fontSize: 15,
    },
  
    facaLogin: {
      color: '#00CCCB',
      fontSize: 15,
      marginBottom: -2,
    },
  
    bxModal: {
      backgroundColor: '#FF8C00',
      margin: 10,
      padding: 10,
      borderRadius: 7,
      elevation: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
    
    txtModal: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
      padding: 20,
    },
  });
  
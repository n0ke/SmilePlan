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
  
  import { useState } from 'react';
  
  export default function cadastro() {
    const [visivel, setVisivel] = useState(false);
  
    const usuario = 'joao';
    const senha = '1234';
    const [entradaUsuario, setEntradaUsuario] = useState('');
    const [entradaSenha, setEntradaSenha] = useState('');
  
    const [texto, setTexto] = useState('');
  
    function validaSenha() {
      if (entradaUsuario == usuario && entradaSenha == senha) {
        setTexto('Senha correta!');
      } else {
        setTexto('Usuário/Senha inválido.');
      }
      setVisivel(true);
    }
  
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View>
          <Modal animationType="slide" transparent={true} visible={visivel}>
            <View style={styles.bxModal}>
              <Text style={styles.txtModal}>{texto}</Text>
              <Button title="Fechar" onPress={() => setVisivel(false)} />
            </View>
          </Modal>
        </View>
  
        <View style={styles.viewLogo}>
          <Image
            style={styles.logo}
            source={require('/assets/Logo-Smile-Plan-Azul.png')}
          />
        </View>
  
        <Text style={styles.textoUsuario}>Criar Conta</Text>
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Primeiro nome"
          autoCorrect={false}
          onChangeText={(valor) => setEntradaUsuario(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Sobrenome"
          autoCorrect={false}
          onChangeText={(valor) => setEntradaSenha(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={(valor) => setEntradaSenha(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Nome de Usuário"
          autoCorrect={false}
          onChangeText={(valor) => setEntradaSenha(valor)}
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
          onChangeText={(valor) => setEntradaSenha(valor)}
        />
  
        <TouchableOpacity style={styles.btnCadastrar} onPress={validaSenha}>
          <Text style={styles.txtCadastrar}>Castrar</Text>
        </TouchableOpacity>
  
        <View style={styles.rodapeCadastro}>
          <Text style={styles.txtRodape}>
            Já possui uma Conta?
            <TouchableOpacity>
              <Text style={styles.facaLogin}> Faça login!</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F8F7F3',
      padding: 8,
    },
  
    viewLogo: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 0,
      justifyContent: 'space-around',
    },
  
    logo: {
      height: 79,
      width: 294,
      marginTop: 10,
      marginLeft: -180,
      width: '28%',
      resizeMode: 'center',
    },
  
    textoUsuario: {
      fontSize: 30,
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
      width: '110%',
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: -10,
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
  
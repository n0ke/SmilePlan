import {
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    View,
    Button,
  } from 'react-native';
  
  import { useState } from 'react';
  
  export default function login() {
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
  
    const Footer = () => {
      return (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 50,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#fff' }}>Este é o rodapé</Text>
        </View>
      );
    };
  
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
          <TouchableOpacity>
            <Text style={styles.cliqueAqui}> Clique Aqui</Text>
          </TouchableOpacity>
        </Text>
  
        <TouchableOpacity style={styles.btnEntrar} onPress={validaSenha}>
          <Text style={styles.txtEnviar}>Entrar</Text>
        </TouchableOpacity>
  
        <View style={styles.rodapeCadastro}>
          <Text style={styles.txtEnviar}>
            Não Possui uma Conta?
            <TouchableOpacity>
              <Text style={styles.cadastreSe}> Cadastre-se!</Text>
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
    logo: {
      height: 79,
      width: 294,
      marginTop: 100,
    },
    textoUsuario: {
      marginLeft: -260,
      marginRight: 30,
      height: 20,
      fontSize: 20,
      marginBottom: 5,
    },
    textoSenha: {
      marginLeft: -270,
      marginRight: 30,
      height: 20,
      fontSize: 20,
      marginBottom: 5,
    },
    caixaDeTextoUsuario: {
      backgroundColor: '#F8F7F3',
      width: '90%',
      marginBottom: 10,
      fontSize: 20,
      borderRadius: 15,
      padding: 10,
      borderWidth: 1,
    },
    caixaDeTextoSenha: {
      backgroundColor: '#F8F7F3',
      width: '90%',
      marginBottom: 10,
      fontSize: 20,
      borderRadius: 15,
      padding: 10,
      borderWidth: 1,
    },
  
    esqueceuSenha: {
      color: '#000000',
      marginBottom: 40,
      marginLeft: -145,
    },
    cliqueAqui: {
      color: '#00CCCB',
    },
  
    btnEntrar: {
      backgroundColor: '#00CCCB',
      width: '30%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 70,
      marginBottom: 100,
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
    cadastreSe: {
      color: '#00CCCB',
    },
  
    txtEnviar: {
      color: '#FFF',
      fontSize: 20,
    },
  
    viewLogo: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 0,
      justifyContent: 'space-around',
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

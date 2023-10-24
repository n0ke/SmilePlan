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
  
  export default function recuperacao() {
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
  
        <View style={styles.criarConta}>
          <Text style={styles.txtRecuperarSenha}>Recuperar Senha</Text>
  
          <TextInput
            style={styles.caixaTexto}
            placeholder="E-mail"
            autoCorrect={false}
            onChangeText={(valor) => setEntradaUsuario(valor)}
          />
        </View>
  
        <TouchableOpacity style={styles.btnEnviar} onPress={validaSenha}>
          <Text style={styles.txtEnviar}>Enviar</Text>
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
      marginTop: 10,
      marginLeft: -180,
      width: '28%',
      resizeMode: 'center',
    },
  
    txtRecuperarSenha: {
      fontSize: 40,
      marginTop: -120,
      color: '#f0f8ff',
    },
  
    caixaTexto: {
      backgroundColor: '#F8F7F3',
      width: '80%',
      marginBottom: 10,
      marginTop: 50,
      fontSize: 20,
      borderRadius: 15,
      padding: 10,
      borderWidth: 1,
    },
  
    btnEnviar: {
      backgroundColor: '#00CCCB',
      width: '80%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 70,
      marginBottom: 150,
    },
  
    criarConta: {
      backgroundColor: '#4F4F4F',
      width: '100%',
      height: 320,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 14,
      marginBottom: -80,
    },
  
    rodapeCadastro: {
      backgroundColor: '#4F4F4F',
      width: '110%',
      height: 80,
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
      paddingTop: 1,
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
  
import {
    Button,
    Image,
    ScrollView,
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
  import { insertConsulta } from './Banco_de_dados/db.js'; // Importe a função de inserção de consulta
  
  export default function CadastroConsulta() {
    const navigation = useNavigation();
    const [visivel, setVisivel] = useState(false);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dia, setDia] = useState('');
    const [hora, setHora] = useState('');
    const [procedimento, setProcedimento] = useState('');
    const [obs, setObs] = useState('');
  
    const cadastrarConsulta = () => {
      insertConsulta(nome, telefone, dia, hora, procedimento, obs)
        .then(result => {
          navigation.navigate('inicio');
          setVisivel(true);
        })
        .catch(error => {
          console.error('Erro ao cadastrar consulta:', error.message);
          setVisivel(true);
        });
    };
  
    return (
      <ScrollView contentContainerStyle={styles.background}>
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
  
        <Text style={styles.textoUsuario}>Cadastro de Consulta</Text>
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={valor => setNome(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Telefone"
          autoCorrect={false}
          onChangeText={valor => setTelefone(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Dia"
          autoCorrect={false}
          onChangeText={valor => setDia(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Hora"
          autoCorrect={false}
          onChangeText={valor => setHora(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Procedimento"
          autoCorrect={false}
          onChangeText={valor => setProcedimento(valor)}
        />
  
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Observações"
          autoCorrect={true}
          onChangeText={valor => setObs(valor)}
        />
  
        <TouchableOpacity style={styles.btnCadastrar} onPress={cadastrarConsulta}>
          <Text style={styles.txtCadastrar}>Cadastrar Consulta</Text>
        </TouchableOpacity>
      </ScrollView>
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
      marginRight: '50%',
      paddingTop: 0,
      paddingBottom: 20,
      justifyContent: 'space-around',
    },
    logo: {
      height: 79 * .5,
      width: 294 * .5,
      marginTop: 100,
    },
    caixaDeTexto: {
      backgroundColor: '#F8F7F3',
      width: '90%',
      marginBottom: 20,
      fontSize: 20,
      borderRadius: 15,
      padding: 10,
      borderWidth: 1,
    },
    textoUsuario: {
      fontSize: 48,
      fontWeight: 'bold',
      marginBottom: 50,
      textAlign: 'center',
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
  });
  
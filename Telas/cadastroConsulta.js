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
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    // ... (Estilos existentes)
  
    // Novos estilos para a tela de cadastro de consulta
  });
  
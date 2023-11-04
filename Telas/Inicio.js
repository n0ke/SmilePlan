import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { listarConsultas } from './Banco_de_dados/db.js';


const inicio = () => {

  const navigation = useNavigation();
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const carregarConsultas = async () => {
      try {
        const consultasDoBanco = await listarConsultas();
        setConsultas(consultasDoBanco);
      } catch (error) {
        console.error('Erro ao carregar consultas:', error);
      }
    };

    carregarConsultas();
  }, []);

  const filtrarConsultasPorStatus = (status) => {
    return consultas.filter((consulta) => consulta.status === status);
  };

  const consultasPendentes = filtrarConsultasPorStatus(0);
  const consultasConfirmadas = filtrarConsultasPorStatus(1);
  const consultasCanceladas = filtrarConsultasPorStatus(2);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Image
            source={require('./assets/Logo-Smile-Plan.png')}
            style={styles.logo}
          />
          <Text style={styles.welcome}>Bem-vindo...</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleMain}>Resumo do dia</Text>

          <View style={styles.confirmadas}>
            <Text style={styles.subtitleWhite}>Consultas confirmadas:</Text>
            <View style={styles.confirmadoCard}>
              {/* Dados da consulta confirmada */}
            </View>
            <View style={styles.innerFieldGreen}>
              {/* Campo dentro da área verde */}
            </View>
          </View>

          <View style={styles.aguardando}>
            <Text style={styles.subtitleDarkYellow}>Aguardando confirmação:</Text>
            <View style={styles.aguardandoCard}>
              {/* Dados da consulta aguardando confirmação */}
            </View>
            <View style={styles.innerFieldYellow}>
              {/* Campo dentro da área amarela */}
            </View>
          </View>

          <View style={styles.canceladas}>
            <Text style={styles.subtitleRed}>Consultas Canceladas:</Text>
            <View style={styles.canceladoCard}>
              {/* Dados da consulta cancelada */}
            </View>
            <View style={styles.innerRedField}>
              {/* Campo dentro da área vermelha */}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Rodapé Fixo */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('cadastroConsulta')} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Agendar</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity  onPress={() => navigation.navigate('inicio')}  style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Início</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={() => navigation.navigate('consultas')}  style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Consultas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  scroll: {
    flex: 1,
  },
  header: {
    backgroundColor: '#333',
    padding: 11,
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 80,
    marginTop: 16,
  },
  welcome: {
    fontSize: 0,
    color: 'white',
  },
  content: {
    padding: 20,
  },
  titleMain: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  confirmadas: {
    backgroundColor: '#006400',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitleWhite: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitleDarkYellow: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    padding: 5,
    borderRadius: 10,
  },
  subtitleRed: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  confirmadoCard: {
    backgroundColor: '#006400',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  aguardando: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  aguardandoCard: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  canceladas: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  confirmadoCard: {
    backgroundColor: '#006400',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  aguardando: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  aguardandoCard: {
    backgroundColor: '#d8e424',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  canceladoCard: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  innerRedField: {
    backgroundColor: 'rgb(255, 220, 220)',
    padding: 40,
    borderRadius: 10,
    marginVertical: -56,
    marginBottom: 6,
  },
  innerFieldGreen: {
    backgroundColor: 'lightgreen',
    padding: 40,
    borderRadius: 10,
    marginVertical: -56,
    marginBottom: 6,
  },
  innerFieldYellow: {
    backgroundColor: '#d8e424',
    padding: 40,
    borderRadius: 10,
    marginVertical: -56,
    marginBottom: 6,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 9,
    paddingBottom: 9, // Adicionei paddingBottom para afastar os botões do campo vermelho
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    flex: 1,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  separator: {
    width: 1,
    backgroundColor: 'white',
  },
});

export default inicio;
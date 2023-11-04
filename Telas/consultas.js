import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { listarConsultas } from './Banco_de_dados/db.js';
import { Ionicons } from '@expo/vector-icons'; // Importe o ícone do pacote de ícones utilizado

const ConsultasScreen = () => {
  const navigation = useNavigation();
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    carregarConsultas();
  }, []);

  const carregarConsultas = async () => {
    try {
      const consultasData = await listarConsultas();
      setConsultas(consultasData);
    } catch (error) {
      console.log('Erro ao carregar as consultas:', error);
      // Lidar com possíveis erros
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => detalhesConsulta(item)}>
        <Text style={styles.itemTitle}>{item.nome}</Text>
        <View style={styles.detailContainer}>
          <Ionicons name="ios-call" size={18} color="#777" style={styles.icon} />
          <Text style={styles.itemDetail}>{item.telefone}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Ionicons name="calendar" size={18} color="#777" style={styles.icon} />
          <Text style={styles.itemDetail}>{item.dia}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Ionicons name="time" size={18} color="#777" style={styles.icon} />
          <Text style={styles.itemDetail}>{item.hora}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const detalhesConsulta = (consulta) => {
    // Implementar a navegação para os detalhes da consulta
    // Por exemplo: navigation.navigate('DetalhesConsulta', { consulta });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas</Text>
      <FlatList
        data={consultas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemDetail: {
    fontSize: 16,
    color: '#555',
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
});

export default ConsultasScreen;

import { Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myDB.db');

const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, password TEXT, email TEXT)',
      [],
      () => {
        Alert.alert('Sucesso', 'Tabela de usuários criada com sucesso!');
      },
      (_, error) => {
        Alert.alert('Erro', 'Erro ao criar a tabela de usuários: ' + error);
      }
    );

    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Consultas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT, dia TEXT, hora TEXT, procedimento TEXT, obs TEXT, status TEXT)',
      [],
      () => {
        Alert.alert('Sucesso', 'Tabela de consultas criada com sucesso!');
      },
      (_, error) => {
        Alert.alert('Erro', 'Erro ao criar a tabela de consultas: ' + error);
      }
    );
  });
};

const insertConsulta = (nome, telefone, dia, hora, procedimento, obs, status = 0) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Consultas (nome, telefone, dia, hora, procedimento, obs, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nome, telefone, dia, hora, procedimento, obs, status],
        (_, results) => {
          Alert.alert('Sucesso', 'Consulta inserida com sucesso! ID: ' + results.insertId);
          resolve('Consulta inserida com sucesso! ID: ' + results.insertId);
        },
        (_, error) => {
          Alert.alert('Erro', 'Erro ao inserir consulta: ' + error);
          reject(new Error('Erro ao inserir consulta'));
        }
      );
    });
  });
};

const insertUser = (nome, email, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (nome, email, password) VALUES (?, ?, ?)',
        [nome, email, password],
        (_, results) => {
          Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
          resolve('Usuário cadastrado com sucesso!');
        },
        (_, error) => {
          Alert.alert('Erro', 'Erro ao cadastrar usuário: ' + error);
          reject(new Error('Erro ao cadastrar usuário'));
        }
      );
    });
  });
};

const retrievePassword = username => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT password FROM users WHERE username = ?',
      [username],
      (_, results) => {
        const len = results.rows.length;
        if (len > 0) {
          const password = results.rows.item(0).password;
          Alert.alert('Sucesso', 'Senha encontrada: ' + password);
          // Faça algo com a senha recuperada
        } else {
          Alert.alert('Aviso', 'Usuário não encontrado');
        }
      },
      (_, error) => {
        Alert.alert('Erro', 'Erro ao buscar senha: ' + error);
      }
    );
  });
};

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (_, results) => {
          const len = results.rows.length;
          if (len > 0) {
            const user = results.rows.item(0);
            if (user.password === password) {
              Alert.alert('Sucesso', 'Login bem-sucedido!');
              resolve(1);
            } else {
              Alert.alert('Aviso', 'Senha incorreta para o usuário: ' + email);
              resolve(0); // Retorna 0 para indicar senha incorreta
            }
          } else {
            Alert.alert('Aviso', 'Usuário não encontrado: ' + email);
            resolve(-1); // Retorna -1 para indicar usuário não encontrado
          }
        },
        (_, error) => {
          Alert.alert('Erro', 'Erro ao realizar o login: ' + error);
          reject(error);
        }
      );
    });
  });
};

const listarConsultas = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Consultas',
        [],
        (_, { rows }) => {
          const consultas = rows._array;
          resolve(consultas);
        },
        (_, error) => {
          Alert.alert('Erro', 'Erro ao listar consultas: ' + error);
          reject(new Error('Erro ao listar consultas'));
        }
      );
    });
  });
};

export {
  createTables,
  insertUser,
  retrievePassword,
  login,
  insertConsulta,
  listarConsultas
};

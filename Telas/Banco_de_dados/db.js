import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myDB.db');
const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, password TEXT, email TEXT)',
      [],
      () => {
        console.log('Tabela de usuários criada com sucesso!');
      },
      (_, error) => {
        console.log('Erro ao criar a tabela de usuários: ' + error);
      }
    );

    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Consultas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT, dia TEXT, hora TEXT, procedimento TEXT, obs TEXT, status TEXT)',
      [],
      () => {
        console.log('Tabela de consultas criada com sucesso!');
      },
      (_, error) => {
        console.log('Erro ao criar a tabela de consultas: ' + error);
      }
    );
  });
};


const insertConsulta = (nome, telefone, dia, hora, procedimento, obs, status = 0) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Consultas (nome, telefone, dia, hora, procedimento, obs, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nome, telefone, dia, hora, procedimento, obs],
        (_, results) => {
          console.log('Consulta inserida com sucesso! ID: ' + results.insertId);
          resolve('Consulta inserida com sucesso! ID: ' + results.insertId);
        },
        (_, error) => {
          console.log('Erro ao inserir consulta: ' + error);
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
        'INSERT INTO users (nome , email , password) VALUES (?, ?, ?)',
        [nome, email, password],
        (_, results) => {
          resolve('Usuário cadastrado com sucesso!');
        },
        (_, error) => {
          reject('Erro ao cadastrar usuário: ' + error);
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
          console.log('Senha encontrada: ' + password);
          // Faça algo com a senha recuperada
        } else {
          console.log('Usuário não encontrado');
        }
      },
      (_, error) => {
        console.log('Erro ao buscar senha: ' + error);
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
              // Faça algo após o login bem-sucedido
              resolve(1);
            } else {
              console.log('Senha incorreta para o usuário: ' + email);
              resolve(0); // Retorna 0 para indicar senha incorreta
            }
          } else {
            console.log('Usuário não encontrado: ' + email);
            resolve(-1); // Retorna -1 para indicar usuário não encontrado
          }
        },
        (_, error) => {
          console.log('Erro ao realizar o login: ' + error);
          reject(error); // Rejeita a Promise em caso de erro
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
          const consultas = rows._array; // Obtém os resultados da consulta
          resolve(consultas); // Resolve a Promise com os dados das consultas
        },
        (_, error) => {
          console.log('Erro ao listar consultas: ' + error);
          reject(new Error('Erro ao listar consultas'));
        }
      );
    });
  });
};



export { createTables, insertUser, retrievePassword , login, insertConsulta , listarConsultas};

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myDB.db');

const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXIST users (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, password TEXT, email TEXT)',
      [],
      () => {
        console.log('Tabela de usuários criada com sucesso!');
      },
      (_, error) => {
        console.log('Erro ao criar a tabela de usuários: ' + error);
      }
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXIST Consultas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT, dia TEXT, hora TEXT, procedimento TEXT, obs TEXT)',
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

const insertUser = (nome,email, password) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (nome , email , password) VALUES (?, ?, ?)',
        [nome,email, password],
        (_, results) => {
          console.log('Usuário cadastrado com sucesso!');
        },
        (_, error) => {
          console.log('Erro ao cadastrar usuário: ' + error);
        }
      );
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


export { createTables, insertUser, retrievePassword , login };

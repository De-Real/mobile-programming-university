import * as SQLite from 'expo-sqlite';
import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Lab8 = () => {
  const [dbData, setDbDate] = useState<any[]>([]);

  useEffect(() => {
    async function openDatabase(): Promise<SQLite.WebSQLDatabase> {
      const db = SQLite.openDatabase('./database.db');
      await createTable(db);
      await insertRecords(db);
      return db;
    }

    openDatabase();
  }, []);

  const createTable = async (db: SQLite.WebSQLDatabase) =>
    new Promise<void>((resolve, reject) => {
      db.transaction(
        tx => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Personnel (id INTEGER PRIMARY KEY AUTOINCREMENT, departmentNumber INTEGER, employeeId INTEGER, lastName TEXT, dateOfBirth TEXT, position TEXT, phoneNumber TEXT)',
            [],
            () => resolve(),
            (_, error) => reject(error),
          );
        },
        () => console.log('Transaction error'),
        () => console.log('Transaction success'),
      );
    });

  const insertRecords = async (db: SQLite.WebSQLDatabase) =>
    new Promise<void>((resolve, reject) => {
      db.transaction(
        tx => {
          // Insert multiple records
          tx.executeSql(
            'INSERT INTO Personnel (departmentNumber, employeeId, lastName, dateOfBirth, position, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)',
            [101, 1001, 'Doe', '1990-01-01', 'Manager', '123-456-7890'],
            (_, {rowsAffected}) => {
              console.log(`Inserted ${rowsAffected} record(s) successfully`);
            },
            (_, error) => reject(error),
          );
        },
        error => {
          console.log('Transaction error:', error);
        },
        () => {
          console.log('Transaction success');
          resolve();
        },
      );
    });
  const retrieveRecordsByPosition = async () => {
    const db = SQLite.openDatabase('./database.db');
    return new Promise<void>((resolve, reject) => {
      db.transaction(
        tx => {
          tx.executeSql(
            'SELECT * FROM Personnel WHERE position = ?',
            ['Manager'],
            (_, {rows}) => {
              setDbDate(rows._array);
              console.log('Records found:');
              for (let i = 0; i < rows.length; ++i) {
                console.log(rows.item(i));
              }
              resolve();
            },
            (_, error) => reject(error),
          );
        },
        () => console.log('Transaction error'),
        () => console.log('Transaction success'),
      );
    });
  };

  const insertRecord = async () => {
    const db = SQLite.openDatabase('./database.db');
    await insertRecords(db);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laboratory Work 7</Text>
      <Button title="Insert Record" onPress={insertRecord} />
      <Button
        title="Retrieve Records by Position"
        onPress={retrieveRecordsByPosition}
      />
      {dbData.map((item, index) => (
        <View key={index}>
          <Text>
            {item.lastName} - {item.position}
          </Text>
          <Text>Birth date: {item.dateOfBirth}</Text>
          <Text>Phone number: {item.phoneNumber}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default Lab8;

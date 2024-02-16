import {FC, memo, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface Props {}
const calculateTable = (
  start: number,
  end: number,
  step: number,
): {x: number; y: number}[] => {
  const table: {x: number; y: number}[] = [];
  for (let x = start; x <= end; x += step) {
    table.push({x, y: x * x}); // Example function: y = x^2
  }
  return table;
};

const Lab4: FC<Props> = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [step, setStep] = useState('');
  const [table, setTable] = useState<{x: number; y: number}[]>([]);

  const handleCalculate = () => {
    const startNum = parseFloat(start);
    const endNum = parseFloat(end);
    const stepNum = parseFloat(step);

    if (
      !Number.isNaN(startNum) &&
      !Number.isNaN(endNum) &&
      !Number.isNaN(stepNum) &&
      stepNum !== 0
    ) {
      const newTable = calculateTable(startNum, endNum, stepNum);
      setTable(newTable);
    }
  };

  const renderTable = () => (
    <View style={styles.tableContainer}>
      <View style={styles.tableRow}>
        <Text style={styles.columnHeader}>X</Text>
        <Text style={styles.columnHeader}>Y</Text>
      </View>
      {table.map((entry, index) => (
        <View style={styles.tableRow} key={index}>
          <Text style={styles.tableCell}>{entry.x}</Text>
          <Text style={styles.tableCell}>{entry.y}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Start"
        value={start}
        onChangeText={text => setStart(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="End"
        value={end}
        onChangeText={text => setEnd(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Step"
        value={step}
        onChangeText={text => setStep(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button onPress={handleCalculate} title="Calculate" />
      </View>
      {table.length > 0 && renderTable()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  tableContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#f2f2f2',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
  },
});

export default memo(Lab4);

import {FC, useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {}

const Calculator: FC<Props> = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    if (num1 && num2) {
      setResult((parseFloat(num1) + parseFloat(num2)).toString());
      Keyboard.dismiss();
    } else {
      Alert.alert('Error', 'Please enter both numbers');
    }
  };

  const handleSubtraction = () => {
    if (num1 && num2) {
      setResult((parseFloat(num1) - parseFloat(num2)).toString());
      Keyboard.dismiss();
    } else {
      Alert.alert('Error', 'Please enter both numbers');
    }
  };

  const handleMultiplication = () => {
    if (num1 && num2) {
      setResult((parseFloat(num1) * parseFloat(num2)).toString());
      Keyboard.dismiss();
    } else {
      Alert.alert('Error', 'Please enter both numbers');
    }
  };

  const handleDivision = () => {
    if (num1 && num2) {
      if (parseFloat(num2) !== 0) {
        setResult((parseFloat(num1) / parseFloat(num2)).toString());
        Keyboard.dismiss();
      } else {
        Alert.alert('Error', 'Division by zero is not allowed');
      }
    } else {
      Alert.alert('Error', 'Please enter both numbers');
    }
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          placeholder="Enter number 1"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter number 2"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />

        <View style={styles.buttonsContainer}>
          <View style={{flexDirection: 'row', width: 300}}>
            <TouchableOpacity style={styles.button} onPress={handleClear}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', width: 300}}>
            <TouchableOpacity style={styles.button} onPress={handleAddition}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubtraction}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleMultiplication}>
              <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDivision}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.result}>
          {result ? `Result: ${result}` : 'No results for now'}
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  buttonsContainer: {
    flexDirection: 'column',
    paddingVertical: 32,
    gap: 24,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    width: 300,
  },
  button: {
    flex: 1,
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Calculator;

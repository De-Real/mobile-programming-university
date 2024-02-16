import {FC, memo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ConstraintLayoutSimulation from './ConstraintLayoutSimulation';

interface Props {}

const Lab4: FC<Props> = () => {
  const [box3Position, setBox3Position] = useState({top: 20, left: 20});

  const getRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * 101); // Random number from 0 to 100
    const randomLeft = Math.floor(Math.random() * 101); // Random number from 0 to 100
    setBox3Position({top: randomTop, left: randomLeft});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laboratory Work 4</Text>
      <Text>Task: 1-2</Text>
      <View
        style={{
          paddingVertical: 150,
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          marginBottom: 150,
        }}>
        <View style={[styles.box, styles.redBox]} />
        <View style={[styles.box, styles.blueBox]} />
        <View style={[styles.box, styles.greenBox, box3Position]} />
        <TouchableOpacity onPress={getRandomPosition} style={styles.moveButton}>
          <Text style={styles.moveButtonText}>Move Box 3</Text>
        </TouchableOpacity>
      </View>
      <Text>Task: 3-4</Text>
      <View>
        <ConstraintLayoutSimulation />
      </View>
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
  box: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  redBox: {
    backgroundColor: 'red',
    top: 20,
    left: 20,
  },
  blueBox: {
    backgroundColor: 'blue',
    top: 20,
    right: 20,
  },
  greenBox: {
    backgroundColor: 'green',
    bottom: 20,
    left: 20,
  },
  moveButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  moveButtonText: {
    color: 'white',
  },
});

export default memo(Lab4);

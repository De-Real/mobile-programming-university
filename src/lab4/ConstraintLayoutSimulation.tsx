import {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {}

const ConstraintLayoutSimulation: FC<Props> = () => (
  <View>
    <View style={[styles.box, styles.redBox]} />
    <View style={[styles.box, styles.blueBox]} />
    <View style={[styles.box, styles.greenBox]} />
  </View>
);

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  redBox: {
    backgroundColor: 'red',
    top: '20%',
    left: '20%',
  },
  blueBox: {
    backgroundColor: 'blue',
    top: '20%',
    right: '20%',
  },
  greenBox: {
    backgroundColor: 'green',
    bottom: '20%',
    left: '20%',
  },
});

export default memo(ConstraintLayoutSimulation);

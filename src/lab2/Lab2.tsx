import {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Calculator from './Calculator';

interface Props {}

const Lab2: FC<Props> = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Laboratory Work 2</Text>
    <Calculator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default memo(Lab2);

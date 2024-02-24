import {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ContextMenu from './ContextMenu';
import OptionsMenu from './OptionsMenu';

interface Props {}

const Lab7: FC<Props> = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Laboratory Work 7</Text>
    <Text>Task 1-2</Text>
    <OptionsMenu />
    <Text>Task 2-3</Text>
    <ContextMenu />
  </View>
);

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

export default memo(Lab7);

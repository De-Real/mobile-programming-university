import {FC, memo} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {}

const Lab3: FC<Props> = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Laboratory Work 3</Text>
    {/* LinearLayout Markup */}
    <View style={styles.linearContainer}>
      <Text>Name:</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
    </View>

    {/* FrameLayout Markup */}
    <View style={styles.frameContainer}>
      <Text style={styles.overlayText}>Overlay Component</Text>
      <Text style={styles.overlayText}>Hello 2</Text>
      <Text style={styles.overlayText}>Hello</Text>
    </View>
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
  linearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginLeft: 10,
    flex: 1,
  },
  frameContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default memo(Lab3);

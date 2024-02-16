import {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {}

const Lab5: FC<Props> = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Laboratory Work 5</Text>
    <Text>Grid Layout Simulation:</Text>
    <View>
      {/* Using Flexbox layout to create a table */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell}>
          <Text>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text>Button 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell}>
          <Text>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text>Button 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.cell}>
          <Text>Button 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text>Button 6</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View>
      <Text>Table Layout Simulation:</Text>
      <View style={[styles.row, styles.tableRow, styles.tableBorderTop]}>
        <TouchableOpacity
          style={[styles.cell1, styles.tableCell, styles.tableBorderLeft]}>
          <Text>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell1, styles.tableCell]}>
          <Text>Button 2</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.tableRow]}>
        <TouchableOpacity
          style={[styles.cell1, styles.tableCell, styles.tableBorderLeft]}>
          <Text>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cell1, styles.tableCell]}>
          <Text>Button 4</Text>
        </TouchableOpacity>
      </View>
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
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 5,
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  cell1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  tableCell: {
    borderRightWidth: 1,
    borderColor: 'black',
  },
  tableBorderLeft: {
    borderLeftWidth: 1,
    borderColor: 'black',
  },
  tableBorderTop: {
    borderTopWidth: 1,
    borderColor: 'black',
  },
});

export default memo(Lab5);

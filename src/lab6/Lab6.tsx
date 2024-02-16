import {FC, memo, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Task2 from './Task2';

interface Props {}

interface Name {
  id: number;
  name: string;
}

const names: Name[] = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
  {id: 3, name: 'Alice'},
  {id: 4, name: 'Bob'},
  {id: 5, name: 'Charlie'},
];

const Separator = () => <View style={{height: 5, backgroundColor: 'red'}} />;

const Lab4: FC<Props> = () => {
  const [selectedName, setSelectedName] = useState<string>('');

  const handleNameSelection = (name: string) => {
    setSelectedName(name);
    Alert.alert('Selected Name', `You selected: ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laboratory Work 4</Text>
      <Text>Task 2: </Text>
      <Task2 />
      <Text>Task 1: </Text>
      <FlatList
        style={{paddingVertical: 24}}
        data={names}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleNameSelection(item.name)}>
            <View style={{paddingVertical: 12, backgroundColor: 'aliceblue'}}>
              <Text>{item.name}</Text>
              <Separator />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={{marginVertical: 20}}>Selected Name: {selectedName}</Text>
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

export default memo(Lab4);

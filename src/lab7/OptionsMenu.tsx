import {useState} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ITEMS = [
  {text: 'Item 1', image: 'account', number: 0},
  {text: 'Item 2', image: 'bell', number: 1},
  {text: 'Item 3', image: 'camera', number: 2},
  {text: 'Item 4', image: 'email', number: 3},
  {text: 'Item 5', image: 'face', number: 4},
];

const OptionsMenu = () => {
  const [isShown, setIsShown] = useState(false);
  const [fromSmallerToBigger, setFromSmallerToBigger] = useState(true);
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const dismissShow = () => {
    setIsShown(false);
  };
  const handleOptionsMenuSelect = (item: string) => {
    dismissShow();
    setModalVisible(true);
    setText(item);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{text}</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              setFromSmallerToBigger(true);
            }}>
            <Text style={styles.modalText}>From smaller to bigger</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.modalText}
              onPress={() => {
                setModalVisible(false);
                setFromSmallerToBigger(false);
              }}>
              From bigger to smaller
            </Text>
          </TouchableOpacity>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <Button title="Options Menu" onPress={() => setIsShown(s => !s)} />
      {isShown && (
        <View>
          {ITEMS.sort((a, b) => {
            if (fromSmallerToBigger) {
              return a.number - b.number;
            }
            return b.number - a.number;
          }).map(item => (
            <TouchableOpacity
              onPress={() => handleOptionsMenuSelect(item.text)}
              style={styles.menuItem}>
              <Icon name={item.image} size={24} style={styles.icon} />
              <Text>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default OptionsMenu;

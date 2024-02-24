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

const ContextMenu = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([
    {text: 'Item 1', color: 'green', image: 'account', number: 0},
    {text: 'Item 2', color: 'green', image: 'bell', number: 1},
    {text: 'Item 3', color: 'green', image: 'camera', number: 2},
    {text: 'Item 4', color: 'green', image: 'email', number: 3},
    {text: 'Item 5', color: 'green', image: 'face', number: 4},
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionsMenuSelect = (item: string) => {
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
          <Button
            title="ChangeTextColor"
            onPress={() => {
              setModalVisible(false);
              setTexts(previousState => {
                const foundText = previousState.find(
                  item => item.text === text,
                );
                if (!foundText) return previousState;
                return previousState.map(item => {
                  if (item.text === text)
                    return {
                      ...item,
                      color: item.color === 'green' ? 'red' : 'green',
                    };
                  return {...item};
                });
              });
            }}
          />
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <View>
        {texts.map(item => (
          <TouchableOpacity
            onLongPress={() => handleOptionsMenuSelect(item.text)}
            style={styles.menuItem}>
            <Icon name={item.image} size={24} style={styles.icon} />
            <Text style={{color: item.color}}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  container: {},
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default ContextMenu;

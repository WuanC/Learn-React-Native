import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  interface IToDo {
    id: string;
    content: string;
  }
  const [todo, setToDo] = useState<string>("");
  const [listToDo, setListToDo] = useState<IToDo[]>([]);

  const OnChangeText = (value: string) => {
    setToDo(value);
  }
  const RandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min + "";
  }
  const OnPressBtn = () => {
    if (!todo) {
      Alert.alert("Lỗi input todo", "Todo không được để trống", [
        {
          text: 'OK',
          onPress: () => console.log("sad"),
        }]);
      return
    }
    setListToDo([{ id: RandomNumber(2, 1888), content: todo }, ...listToDo])
    setToDo("")
  }
  const OnDeleteToDo = (id: string) => {
    Alert.alert("Xác nhận xóa", "Bạn chắc chắn muốn xóa chứ", [
      { text: 'Hủy', onPress: () => { return; } },
      {
        text: 'Xác nhận', onPress: () => {
          const newToDoList = listToDo.filter(item => item.id != id)
          setListToDo(newToDoList);
        }
      }
    ])


  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>To do App</Text>
        <TextInput
          style={styles.textInput}
          value={todo}
          onChangeText={OnChangeText}
        />
        <View style={styles.button}>
          <Button
            title='Add to do'
            onPress={OnPressBtn}
          />
        </View>
        <FlatList
          data={listToDo}
          keyExtractor={item => item.id}
          renderItem={(data) => {
            return (
              <TouchableOpacity onPress={() => OnDeleteToDo(data.item.id)}>
                <Text style={styles.item}>{data.item.content}</Text>
              </TouchableOpacity>

            );
          }}
        />
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink",
    fontSize: 60,
    color: "white",
    textAlign: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  textInput: {
    borderBottomColor: "green",
    borderBottomWidth: 1,
    fontSize: 30,
    margin: 10,
  },
  button: {
    marginHorizontal: 60,
    borderColor: 'red',
    borderWidth: 1
  },
  item: {
    borderWidth: 1,
    borderColor: "pink",
    fontSize: 30,
    margin: 10,
    paddingLeft: 20
  }
});

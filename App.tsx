import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  type Student = {
    id: string;
    name: string;
    age: number;
  };
  const [students, setStudents] = useState<Student[]>([
    { id: '1', name: 'Quan1', age: 18 },
    { id: '2', name: 'Quan2', age: 18 },
    { id: '3', name: 'Quan3', age: 18 },
    { id: '4', name: 'Quan4', age: 18 },
    { id: '5', name: 'Quan5', age: 18 },
    { id: '6', name: 'Quan6', age: 18 },
    { id: '7', name: 'Quan7', age: 18 },
    { id: '9', name: 'Quan8', age: 18 },
  ]);
  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Hello word</Text>
      {/* <ScrollView>
      {students.map(item => {
        return(
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}

      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={(data) => {
        return(
          <View>
            <Text style={styles.item}>{data.item.name}</Text>
          </View>
        )
        }}
      
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  item: {
    fontSize: 30,
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 50
  }
});

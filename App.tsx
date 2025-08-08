import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  return (
      
      <View style ={styles.container}>
         <View>
         <Text style ={styles.text}>Name: {name}</Text>

          <TextInput style = {styles.inputField}
           onChangeText={(value) => setName(value)}
          />
        </View>
                 <View>
         <Text style ={styles.text}>Age: {age}</Text>

          <TextInput style = {styles.inputField}
           onChangeText={(value) => setAge(+value)}
           keyboardType='numeric'
          maxLength={2}
          />
        </View>
          <Text style = {styles.text}> count = {count} </Text>
           <View>
              <Button 
                color={"red"}
                title='Increase'
                onPress={() => setCount(count + 1)}
              />
           </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 40,
  },
  inputField: {
    borderColor: 'green',
    borderWidth: 1,
    width: 200,
    padding: 1,
  }
});

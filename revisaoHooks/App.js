import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count , setCount] = useState(0)

  const increment = () => {
    setCount (count + 1)
  }

  const decrement = () => {
    setCount(count - 1) 
  }

  //effect 

 useEffect( () => {
  console.warn(`Contador atualizado : ${count}`)
 }, [count])


  return (
    <View style={styles.container}>

      <Text style={styles.contador}>Contador: {count} </Text>

      <TouchableOpacity onPress={increment}
      style= {styles.btnI}
      >
        <Text 
        style={styles.textBtn}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement}
      style= {styles.btnD}
      >
       <Text
        style={styles.textBtn}
       >Decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE0D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnI:{
    
    width: '50%',
    height: 30,
    marginTop: 50,
    borderRadius: 10,
    borderColor : 'white',
    backgroundColor: '#E2AC48',
    alignItems: 'center'
  },

  btnD:{
    
    width: '50%',
    height: 30,
    marginTop: 50,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#983C2D',
    alignItems: 'center'
  },

  textBtn:{
    color: 'white'
  },

  contador:{
    fontSize: 16,
    //color: 'white'
  }

});

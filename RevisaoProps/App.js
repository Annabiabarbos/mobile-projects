import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person';
import {useFonts, Poppins_200ExtraLight_Italic } from '@expo-google-fonts/poppins'
import {PlayfairDisplay_500Medium} from '@expo-google-fonts/playfair-display'
export default function App() {


    let [fontsLoaded, fontError] = useFonts({
      Poppins_200ExtraLight_Italic,
      PlayfairDisplay_500Medium
    });

    if (!fontsLoaded && !fontError) {
      return null;
    }

    //simulando uma lista de pessoas 
    const peopleList = [
      {id: '1', name: 'Anna', age: '18'},
      {id: '2', name: 'Carlos', age: '37'},
      {id: '3', name: 'Eduardo', age: '47'}
    ]

  return (
    <SafeAreaView>

      {/*Para android*/}
      <StatusBar/>


     { /*<Person name ='Anna' age={18}/>
      <Person name ='Carlos' age={37}/>
      <Person name ='Eduardo' age={47}/>*/}

      {/*usando o flatlist */}
      <FlatList
      
      data={peopleList}
      keyExtractor={(item) => item.id}

      //exibir cada item da lista
      renderItem={({item}) => (
        <Person name={item.name} age = {item.age} />
      )}
      
      />
    </SafeAreaView>
  );
}
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';


export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Person name ='Anna' age={18}/>
      <Person name ='Carlos' age={37}/>
      <Person name ='Eduardo' age={27}/>
    </SafeAreaView>
  );
}

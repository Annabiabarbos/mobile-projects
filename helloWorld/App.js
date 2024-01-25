import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import { Image, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <TextInput
        style={styles.input}
        defaultValue='exemplo de input'
      />

      <Button style = {styles.botao}>
        <text>Exemplo de botao</text>
      </Button>

      {/*<Image
        style={styles.imagem}
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
      />*/}

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#735BA4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: '500'
  },

  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  },

  imagem: {
    width: 200,
    height: 200
  },

 botao : {
  
 }

});

import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={{
          uri: 'https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg',
        }}
      />
      <Text>Login</Text>

      <View
        style={styles.view}
      >

        <Text
          style={styles.textEmail}
        >Email</Text>

        <TextInput
          style={styles.inputEmail}
          placeholder='digite seu email'
        ></TextInput>

        <Text
          style={styles.textSenha}
        >Senha</Text>

        <TextInput
          style={styles.inputSenha}
          placeholder='digite sua senha'
          secureTextEntry
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.botao}
      >
        <Text
          style={styles.textButton}
        >Entrar</Text>
      </TouchableOpacity>



      <StatusBar style="auto" />
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
  imagem: {
    height: 100,
    width: 100,
  },

  view: {
    width: 300,

  },

  textEmail: {
    marginTop: 30,
  },

  inputEmail: {
    //marginTop: 30,

    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
  },

  textSenha: {
    marginTop: 30,
  },

  inputSenha: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
  },

  botao: {
    width: '30%',
    height: 30,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#E5AE2F'
  },

  textButton: {
    textAlign: 'center',
    padding: 5,

    color: 'white'
  }
});




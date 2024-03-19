import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function App() {

  const [biometricExist, setBiometricExist] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [history , setHistory] = useState ({})

  async function CheckExistAuthenticates() {
    //validacao do aparelho

    const compatible = await LocalAuthentication.hasHardwareAsync()

    setBiometricExist(compatible)

    //consultar validações existentes

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    console.log(LocalAuthentication.AuthenticationType[types[0]]);
  }

  async function handleAuthentication() {

    const biometric = await LocalAuthentication.isEnrolledAsync();

    //valida se existe uma biometria cadastrada
    if (!biometric) {
      return Alert.alert(
        "Não foi encontrda nenhuma biometria cadastrada !"
      )
    }

    //caso exista -->
   const auth = await LocalAuthentication.authenticateAsync({
    promptMessage: 'Login com biometria'
   })
   setAuthenticated(auth.success)

   if (auth.success){
    SetHistory()
   }
  }
  
  async function SetHistory (){
    const objAuth = {
      dateAuthenticate : moment().format("DD/MM/YYYY HH:mm:ss")
    }
    await AsyncStorage.setItem("authenticate" , JSON.stringify(objAuth))


    setHistory(objAuth)
  }


  async function GetHistory(){
    const objAuth = await AsyncStorage.getItem("authenticate") 

    if(objAuth){
      setHistory(JSON.parse(objAuth))
    }
  }

  useEffect(() => {
    CheckExistAuthenticates()
    GetHistory()
  }, [] )


  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>
        {
          biometricExist ? 'Seu dispositivo  é compátivel com a Biometria'
            : 'Seu dispositivo não suporta o faceId / biometria'
        }
      </Text>

      <TouchableOpacity style={styles.btnAuth} onPress={handleAuthentication}>
        <Text style={styles.txtAuth}>Autenticar acesso</Text>
      </TouchableOpacity>

      <Text style={[styles.txtReturn, { color: authenticated ? 'green' : 'red' }]}>
        {authenticated ? "Autenticado" : "Não autenticado"}
      </Text>

      {
        history.dateAuthenticate ? 
        <Text style={styles.txtHistory}>Ultimo acesso em {history.dateAuthenticate}</Text>
        : null
      }

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
  tittle: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    width: '70%'
  },
  btnAuth: {
    padding: 16,
    borderRadius: 15,
    margin: 20,
    backgroundColor: '#E1CBEE'
  },
  txtAuth: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtReturn: {
    fontSize: 22,
    alignItems: 'center',
    marginTop: 50,
  }, 
  txtHistory: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#858383',
  position: 'absolute',
  bottom: 120
  
  }
});

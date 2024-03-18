import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//import da biblioteca
import * as notifications from "expo-notifications"

//solicitar permissao de notificacao 
notifications.requestPermissionsAsync();

//definir como as notificacoes devem ser tratadas quando recebidas.
notifications.setNotificationHandler({
  handleNotification: async () => ({

    //mostra o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //define o som da notificacao
    shouldPlaySound: true,

    //configura o numeor de notificacao0es no icone do app
    shouldSetBadge: false,
  })
})

export default function App() {

  //criar funcao pqara lidar com a chamada da notificacao
  const handleCallNotification = async () => {

    //ststus da permissao
    const { status } = await notifications.getPermissionsAsync();

    // verifica se o usuario concedeu permissao
    if (status !== "granted") {
      console.log("Você não ativou as notificações");
      return;
    }
    //enviar as notifications 
    await notifications.scheduleNotificationAsync({
      content: {
        title: "Hello World",
        body: "lorem ipsum dolor sit a met",
        // sound: 'https://pixabay.com/pt/sound-effects/error-126627/'

      },
      trigger: null/*{
        seconds: 5
      }*/ 
    })

  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotification}>
        <Text style={styles.Text}>
          Não clique nesse botão
        </Text>
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
  button: {
    width: '80%',
    height: 80,
    backgroundColor: "purple",
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: "white",
    fontSize:15,
    textTransform: 'uppercase',
    fontWeight:"bold"
  }
});

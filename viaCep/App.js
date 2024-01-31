import { StatusBar } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { ContainerApp } from './styles';

//import fonts
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Header } from './src/components/Header';
import { Home } from './src/components/screens/Home';

export default function App() {

  const { fontLoaded, fontError } = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  })

  /*if(!fontLoaded && !fontError){
    return null;
  }*/
  return (
    <ContainerApp>
      <StatusBar style="auto" />
      <Header />
      <Home/>

    </ContainerApp>
  );
}



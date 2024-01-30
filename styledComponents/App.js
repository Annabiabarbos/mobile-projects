import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title } from './src/components/Tittle/Title';
import { ButtonI, ButtonD } from './src/components/Button/Button';
import { TextButton } from './src/components/Button/TextButton';

export default function App() {


  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  //effect 

  useEffect(() => {
    console.warn(`Contador atualizado : ${count}`)
  }, [count])


  return (
    <Container>

      <Title>Contador: {count} </Title>

      <ButtonI onPress={increment}
      //style= {styles.btnI}
      >
        <TextButton
        //style={styles.textBtn}
        >Incrementar</TextButton>
      </ButtonI>

      <ButtonD onPress={decrement}
        style={styles.btnD}
      >
        <TextButton
        //style={styles.textBtn}
        >Decrementar</TextButton>
      </ButtonD>

      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
 
  });

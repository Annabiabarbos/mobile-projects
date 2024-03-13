import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';

export default function App() {
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.front)

useEffect (() =>{
  (async()=>{
    const {status: cameraStatus } = await Camera. requestCameraPermissionsAsync()
  })()
},[])

  return (
    <View style={styles.container}>
      <Camera 
        type={typeCamera} //tipo da câmera
        style={styles.camera} // estilo da câmera
        ratio={'16:9'} 
      >
        <View style={styles.viewFlip}> 
          {/*Botão para trocar a câmera*/ }
        <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)} > 
          <Text style={styles.textFlip}>
            Trocar 
          </Text>
        </TouchableOpacity>
        </View>
        

      </Camera>
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
  camera: {
    flex: 1,
    width: '100%',
    height: '80%'
  },
  viewFlip:{
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFlip:{
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 15
  },
  textFlip:{
    fontSize:20,
    color: '#fff',
    marginBottom: 20
  }
});

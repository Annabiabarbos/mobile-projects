import {
  requestForegroundPermissionsAsync, //solicita acesso a localização atual do dispositivo
  getCurrentPositionAsync, // recebe a localização atual do dispositivo 

  watchPositionAsync, //monitorar o posicionamento
  LocationAccuracy  //pega 
} from 'expo-location'
import { useEffect, useState, useRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// importando dependencia do mapa
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { mapsKey, mapskey } from "./utils/MapsApiKey"

import MapViewDirections from 'react-native-maps-directions';

export default function App() {
  const mapReference = useRef(null)
  const [initialPosition, setInitialPosition] = useState(null)
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.6700,
    longitude: -46.4486
  })

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const captureLocation = await getCurrentPositionAsync()

      setInitialPosition(captureLocation);
    }
  }


  useEffect(() => {
    CapturarLocalizacao()

    //monitora em tempo real 
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, async (Response) => {
      //recebe e guarda a nova localizacao
      await setInitialPosition(Response)

      mapReference.current?. animateCamera({
        pitch: 60, //tempo
        center: Response.coords 
      })


      console.log(Response);
    })

  }, [1000])

  useEffect(() => {
    RecarregarVisualizacaoMapa()
  }, [initialPosition])


  async function RecarregarVisualizacaoMapa() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [{ latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
        { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
        ], {
        edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
        animated: true
      }
      )
    }
  }

  return (
    <View style={styles.container}>



      {initialPosition != null ?

        <>
          <MapView

            ref={mapReference}

            initialRegion={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
              latitudeDelta: 0.5,
              longitudeDelta: 0.5,
            }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={grayMapStyle}
            style={styles.map}
          >
            <Marker

              coordinate={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
              }}
              title='Posição inicial'
              description='Posição atual'
              pinColor={'blue'}
            />


            <MapViewDirections

              origin={initialPosition.coords}
              destination={
                {
                  latitude: -23.6700,
                  longitude: -46.4486,
                  latitudeDelta: 0.0050,
                  longitudeDelta: 0.0050,
                }}

              apikey={mapskey}
              strokeWidth={5}
              strokeColor={'#499bba'}

            />

            <Marker

              coordinate={{
                latitude: -23.6700,
                longitude: -46.4486,
              }}
              title='Local de destino'
              description='Posição final'
              pinColor={'purple'}
            />
          </MapView>


        </> : <>

          <Text>Localização não encontrada</Text>
          <ActivityIndicator />

        </>}
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
  map: {
    flex: 1,
    width: "100%"
  },
});


const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];

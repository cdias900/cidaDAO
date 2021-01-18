import React, { useEffect, useState } from 'react';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Text, Alert } from 'react-native';

import { Container, Map } from './styles';

const Home: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Oooops...',
          'Precisamos de sua permissão para obter a localização'
        );
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      setInitialPosition([latitude, longitude]);
    }
    loadPosition();
  }, []);

  return (
    <Container>
      {initialPosition[0] !== 0 && (
            <Map
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
                <Marker
                  coordinate={{
                    latitude: -15.8862662,
                    longitude: -47.8119861,
                  }}
                >
                    <Text>Teste</Text>
                </Marker>
            </Map>
          )}
    </Container>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Text, Alert } from 'react-native';

import DrawerToggle from '../../components/DrawerToggle';

import { Container, Map, BottomBar, BottomBarText, MapOverlay } from './styles';

const Home: React.FC = () => {
  const { navigate, reset, dispatch } = useNavigation();
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);
  const [token, setToken] = useState('');

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('token');
      if(!token)
        return reset({
          index: 1,
          routes: [{ name: 'Splash' }, { name: 'Login' }],
        });
      setToken(token);
    }
    getToken();
  }, [])

  useEffect(() => {
    async function loadPosition() {
      try {
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
      } catch(e) {
        Alert.alert('Erro ao obter localização');
      }
    }
    loadPosition();
  }, []);

  const toggleDrawer = () => {
    dispatch(DrawerActions.toggleDrawer());
  }

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
      <DrawerToggle toggleDrawer={toggleDrawer} />
      <MapOverlay />
      <BottomBar>
        <BottomBarText>Perto de Você</BottomBarText>
      </BottomBar>
    </Container>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Text, Alert } from 'react-native';

import DrawerToggle from '../../components/DrawerToggle';
import api from '../../services/api';

import { Container, Map, BottomBar, BottomBarText, MapOverlay } from './styles';

interface WishData {
  _id: string;
  title: string;
  type: string;
  description?: string;
  images: string[];
  latitude: number;
  longitude: number;
}

const Home: React.FC = () => {
  const { reset, dispatch } = useNavigation();
  const [initialPosition, setInitialPosition] = useState<[number, number, number]>([0,0,1]);
  const [token, setToken] = useState('');
  const [wishes, setWishes] = useState<WishData[]>([]);

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
        setInitialPosition([latitude, longitude, 0.014]);
      } catch(e) {
        Alert.alert('Erro ao obter localização');
        setInitialPosition([-15.8862662, -47.8119861, 10]);
      }
    }
    loadPosition();
  }, []);

  useEffect(() => {
    if(token === '') return;
    api.get<WishData[]>('/wishes', {
      headers: {
        authorization: token
      }
    })
      .then(res => setWishes(res.data))
      .catch(err => console.log(err));
  }, [token]);

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
            latitudeDelta: initialPosition[2],
            longitudeDelta: initialPosition[2],
          }}
          showsMyLocationButton
          showsCompass
        >
          {wishes.map((wish) => (
            <Marker
              key={wish._id}
              coordinate={{
                latitude: wish.latitude,
                longitude: wish.longitude,
              }}
              title={wish.title}
            />
          ))}
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

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { GEOCODING_KEY } from '@env';
import { Text } from 'react-native';

import DrawerToggle from '../../components/DrawerToggle';
import api from '../../services/api';
import { WishData } from '../WishDetail';

import {
  Container,
  Map,
  BottomBar,
  BottomBarText,
  MapOverlay,
  BottomBarInput,
  BottomBarInputView,
  AddressesContainer,
  AdressTextButton,
  AddressText
} from './styles';

interface AddressData {
  displayLatLng: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  street?: string;
  adminArea1: string;
  adminArea3: string;
  adminArea6: string;
}

const Home: React.FC = () => {
  const { reset, dispatch, navigate } = useNavigation();
  const [position, setPosition] = useState<[number, number, number]>([0,0,1]);
  const [token, setToken] = useState('');
  const [wishes, setWishes] = useState<WishData[]>([]);
  const [address, setAddress] = useState('');
  const [searchResults, setSearchResults] = useState<AddressData[]>([]);
  const [showSearchResults, setShowSearchResult] = useState(false);

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
        setPosition([latitude, longitude, 0.014]);
      } catch(e) {
        Alert.alert('Erro ao obter localização');
        setPosition([-15.8862662, -47.8119861, 10]);
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

  useEffect(() => {
    if(address !== '') {
      const timer = setTimeout(() => {
        api.get(`http://open.mapquestapi.com/geocoding/v1/address?key=${GEOCODING_KEY}&location=${address}`)
          .then(res => {
            console.log(res.data);
            setSearchResults(res.data.results[0].locations);
            setShowSearchResult(true);
          })
          .catch(err => console.log(err));
      }, 500)
      return () => clearTimeout(timer);
    }
    setSearchResults([]);
    setShowSearchResult(false);
  }, [address])

  const toggleDrawer = () => {
    dispatch(DrawerActions.toggleDrawer());
  }

  const moveToPosition = (latitude: number, longitude: number) => {
    setAddress('');
    setPosition([latitude, longitude, 0.014]);
  }

  return (
    <Container>
      {position[0] !== 0 && (
        <Map
          region={{
            latitude: position[0],
            longitude: position[1],
            latitudeDelta: position[2],
            longitudeDelta: position[2],
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
              onCalloutPress={() => navigate('WishDetail',{ wish })}
            >
              <Callout>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                  {wish.title}
                </Text>
                <Text>
                  {wish.description}
                </Text>
              </Callout>
            </Marker>
          ))}
        </Map>
      )}
      <DrawerToggle toggleDrawer={toggleDrawer} />
      <MapOverlay />
      <BottomBar>
        <BottomBarText>Perto de Você</BottomBarText>
        <BottomBarInputView>
          <BottomBarInput
            placeholder="OU BUSQUE UM ENDEREÇO"
            placeholderTextColor="#737373"
            value={address}
            onChangeText={setAddress}
          />
          {showSearchResults && (
            <AddressesContainer>
              {searchResults.map((result) => (
                <AdressTextButton
                  key={result.displayLatLng.lat}
                  onPress={() => moveToPosition(result.displayLatLng.lat, result.displayLatLng.lng)}
                >
                  <AddressText>
                    {`${result.street}${result.street && ', '}${result.adminArea6}, ${result.adminArea3}, ${result.adminArea1} - ${result.postalCode}`}
                  </AddressText>
                </AdressTextButton>
              ))}
            </AddressesContainer>
          )}
        </BottomBarInputView>
      </BottomBar>
    </Container>
  );
}

export default Home;

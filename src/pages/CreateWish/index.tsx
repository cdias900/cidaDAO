import React, { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import * as Location from 'expo-location';
import { Alert, TouchableOpacity } from 'react-native';
import { MapEvent, Marker } from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import { wishTypes } from '../../constants';

import {
  Container,
  Title,
  SubTitle,
  Label,
  TextArea,
  Input,
  Map,
  MapContainer,
  Img,
  ImgContainer,
  SendBtn,
  SendBtnText,
  CloseButton,
  pickerStyle
} from './styles';

const CreateWish: React.FC = () => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [initialPosition, setInitialPosition] = useState<[number, number, number]>([0,0,1]);
  const [marker, setMarker] = useState<[number, number]>([0,0]);
  const [images, setImages] = useState<string[]>([]);
  const { reset } = useNavigation();

  useEffect(() => {
    let isMounted = true;
    async function loadPosition() {
      try {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          if(isMounted)
            Alert.alert(
              'Oooops...',
              'Precisamos de sua permissão para obter a localização'
            );
          return;
        }
        const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });

        const { latitude, longitude } = location.coords;
        if(isMounted) setInitialPosition([latitude, longitude, 0.014]);
      } catch(e) {
        if(isMounted) {
          setInitialPosition([-15.8862662, -47.8119861, 10]);
        }
      }
    }
    loadPosition();
    return () => { isMounted = false }
  }, []);

  const handleMapPress = (e: MapEvent<{}>) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarker([latitude, longitude]);
  }

  const pickImage = async () => {
    if(images.length >= 3) return Alert.alert('Você pode enviar no máximo 3 fotos')
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted')
      return Alert.alert(
        'Oooops...',
        'Precisamos de sua permissão para acessar a galeria'
      );
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  }

  const goToHome = () => {
    return reset({
      index: 0,
      routes: [{ name: 'Home' }]
    })
  }

  const handleCreateWish = async () => {
    if(marker[0] === 0 && marker[1] === 0) return Alert.alert('Por favor selecione o local do desejo no mapa');
    if(title === '') return Alert.alert('Por favor digite o título do desejo');
    if(type === '') return Alert.alert('Por favor selecione o tipo do desejo');
    const token = await AsyncStorage.getItem('token');
    if(!token) return Alert.alert('Erro!');
    const form = new FormData();
    images.forEach(image => {
      const filename = image.split('/').pop();
      if(!filename) return;
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;
      form.append('image', {
        uri: image,
        name: filename,
        type,
      } as unknown as string);
    });
    form.append('title', title);
    form.append('type', type);
    form.append('latitude', String(marker[0]));
    form.append('longitude', String(marker[1]));
    form.append('description', description);
    api.post('/wish', form, {
      headers: {
        authorization: token
      }
    })
      .then(() => {
        Alert.alert('Desejo cadastrado com sucesso');
        goToHome();
      })
      .catch((err) => {
        console.log(err)
        Alert.alert('Erro ao cadastrar desejo')
      });
  }

  return (
    <Container>
      <TouchableOpacity onPress={goToHome}>
        <CloseButton source={require('../../assets/close-button.png')} />
      </TouchableOpacity>
      <Title>Cadastre um desejo</Title>
      <SubTitle>Reivindique melhorias para a cidade!</SubTitle>
      <Label>Local</Label>
      <MapContainer>
        {initialPosition[0] !== 0 && (
          <Map
            initialRegion={{
              latitude: initialPosition[0],
              longitude: initialPosition[1],
              latitudeDelta: initialPosition[2],
              longitudeDelta: initialPosition[2],
            }}
            showsMyLocationButton
            onPress={handleMapPress}
          >
            {marker[0] !== 0 && (
              <Marker
                coordinate={{
                  latitude: marker[0],
                  longitude: marker[1],
                }}
                image={require('../../assets/marker.png')}
              />
            )}
          </Map>
        )}
      </MapContainer>
      <Label>Título</Label>
      <Input
        value={title}
        onChangeText={setTitle}
        placeholder="Título do seu desejo"
        placeholderTextColor="#737373"
      />
      <Label>Tipo</Label>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        items={wishTypes}
        value={type}
        onValueChange={value => setType(value)}
        style={pickerStyle}
        placeholder={{
          label: 'Selecione uma opção',
          value: '',
        }}
      />
      <Label>Descrição</Label>
      <TextArea
        multiline
        numberOfLines={10}
        value={description}
        onChangeText={setDescription}
        underlineColorAndroid="transparent"
        placeholder="Descreva seu desejo"
        placeholderTextColor="#737373"
      />
      <Label>Foto</Label>
      <ImgContainer
        data={[...images, 'pick']}
        keyExtractor={(item) => item as string}
        horizontal
        renderItem={({ item, index }) => {
          if(index < images.length) return <Img source={{ uri: item as string }} />
          return (
            <TouchableOpacity onPress={pickImage}>
              <Img source={require('../../assets/picture.png')} noMargin />
            </TouchableOpacity>
          );
        }}
      />
      <SendBtn onPress={handleCreateWish}>
        <SendBtnText>PRONTO</SendBtnText>
      </SendBtn>
    </Container>
  );
}

export default CreateWish;

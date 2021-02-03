import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { GEOCODING_KEY } from '@env';

import { wishTypes } from '../../constants';
import geoApi from '../../services/geoApi';
import api from '../../services/api';

import {
  Container,
  Title,
  Description,
  ImgContainer,
  Img,
  LikeCount,
  LikeButton,
  LikeButtonText,
  LikeIcon,
  CloseButton
} from './styles'

export interface WishData {
  _id: string;
  title: string;
  type: string;
  description?: string;
  images: string[];
  likes: string[];
  latitude: number;
  longitude: number;
}

export interface AddressData {
  displayLatLng: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  street?: string;
  adminArea1: string;
  adminArea3: string;
  adminArea5: string;
  adminArea6: string;
}

const WishDetail: React.FC = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const [liked, setLiked] = useState(false);
  const [userId, setUserId] = useState('');
  const [wish, setWish] = useState<WishData | undefined>();
  const [address, setAddress] = useState<AddressData[]>([]);

  useEffect(() => {
    async function getUserId() {
      const token = await AsyncStorage.getItem('token');
      if(!token) return;
      api.get('/user', {
        headers: {
          authorization: token,
        }
      })
        .then(res => setUserId(res.data._id))
        .catch(err => console.log(err));
    }
    getUserId();
  }, []);

  useEffect(() => {
    async function getWishData() {
      const token = await AsyncStorage.getItem('token');
      if(!token) return;
      api.get<WishData>(`/wish/${(params as { id: string }).id}`, {
        headers: {
          authorization: token
        }
      })
        .then(res => setWish(res.data))
        .catch(err => console.log(err));
    }
    getWishData();
  }, []);

  useEffect(() => {
    if(wish && userId !== '' && wish.likes.includes(userId)) {
      setLiked(true);
      return;
    }
    setLiked(false);
  }, [wish, userId])

  useEffect(() => {
    if(!wish) return;
    geoApi.get(`/reverse?key=${GEOCODING_KEY}&location=${wish.latitude}%2C${wish.longitude}&includeRoadMetadata=true&includeNearestIntersection=true` , {
      headers: {
        'accept-language': 'BR'
      }
    })
      .then(res => {
        console.log(res.data);
        setAddress(res.data.results[0].locations)
      })
      .catch(err => console.log(err));
  }, [wish])

  const likeWish = async () => {
    if(userId === '') return;
    if(liked) removeLike();
    else addLike();
    const token = await AsyncStorage.getItem('token');
    if(!token) return;
    api.post(`/like/${wish?._id}`, {}, {
      headers: {
        authorization: token
      }
    })
      .catch((err) => {
        console.log(err);
        removeLike();
      });
  }

  if(!wish) return null;

  const addLike = () => {
    setLiked(true);
    setWish({
      ...wish,
      likes: [...wish.likes, userId]
    });
  }

  const removeLike = () => {
    setLiked(false);
    setWish({
      ...wish,
      likes: wish.likes.filter(l => l !== userId)
    });
  }

  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <CloseButton source={require('../../assets/close-button.png')} />
      </TouchableOpacity>
      <Title center>{wish.title}</Title>
      <Description>{wish.description}</Description>
      <Title>Local</Title>
      {address.length > 0 && (
        <Description>
          {`${address[0].street}${address[0].street && ', '}${address[0].adminArea6}, ${address[0].adminArea5}, ${address[0].adminArea3}, ${address[0].adminArea1} - ${address[0].postalCode}`}
        </Description>
      )}
      <Title>Tipo</Title>
      <Description>{wishTypes.find(t => t.value === wish.type)?.label}</Description>
      <Title>Fotos</Title>
      <ImgContainer
        data={wish.images}
        keyExtractor={(item) => item as string}
        horizontal
        renderItem={({ item, index }) => <Img source={{ uri: item as string }} noMargin={index === wish.images.length - 1} />}
      />
      <LikeCount>{wish.likes.length} cidadãos curtiram esse desejo</LikeCount>
      <LikeButton onPress={likeWish}>
        <LikeIcon source={require('../../assets/like.png')} liked={liked} />
        <LikeButtonText>{liked ? 'Você curtiu esse desejo' : 'Curtir desejo'}</LikeButtonText>
      </LikeButton>
    </Container>
  );
}

export default WishDetail;

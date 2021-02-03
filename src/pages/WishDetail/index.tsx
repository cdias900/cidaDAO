import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';

import { Container, Title, Description, ImgContainer, Img } from './styles'

interface Params {
  wish: WishData;
}

export interface WishData {
  _id: string;
  title: string;
  type: string;
  description?: string;
  images: string[];
  latitude: number;
  longitude: number;
}

const WishDetail: React.FC = () => {
  const { params } = useRoute();
  const wish = (params as Params).wish;
  return (
    <Container>
      <Title>{wish.title}</Title>
      <Description>{wish.description}</Description>
      <ImgContainer
        data={wish.images}
        keyExtractor={(item) => item as string}
        horizontal
        renderItem={({ item, index }) => <Img source={{ uri: item as string }} noMargin={index === wish.images.length - 1} />}
      />
    </Container>
  );
}

export default WishDetail;

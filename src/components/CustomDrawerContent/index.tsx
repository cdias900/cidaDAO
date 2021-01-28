import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { Text } from 'react-native';

import { blueStyle, whiteStyle, ProfilePic, ProfilePicContainer, ProfileText, BlueLabelText, LabelText } from './styles';

const CustomDrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ padding: 0 }}>
      <DrawerItem
        style={blueStyle}
        label={() => (
          <ProfilePicContainer>
            <ProfilePic source={require('../../assets/profile.png')} />
            <ProfileText>Seu Nome</ProfileText>
          </ProfilePicContainer>
        )}
        onPress={() => {}}
      />
      <DrawerItem
        style={blueStyle}
        label={() => <BlueLabelText>Perfil</BlueLabelText>}
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        style={blueStyle}
        label={() => <BlueLabelText>Mensagens</BlueLabelText>}
        onPress={() => {}}
      />
      <DrawerItem
        style={whiteStyle}
        label={() => <LabelText>Cadastre um desejo</LabelText>}
        onPress={() => props.navigation.navigate('CreateWish')}
      />
      <DrawerItem
        style={whiteStyle}
        label={() => <LabelText>Meus Desejos</LabelText>}
        onPress={() => {}}
      />
      <DrawerItem
        style={whiteStyle}
        label={() => <LabelText>Desejos mais populares</LabelText>}
        onPress={() => {}}
      />
      <DrawerItem
        style={whiteStyle}
        label={() => <LabelText>Desejos atendidos</LabelText>}
        onPress={() => {}}
      />
      <DrawerItem
        style={whiteStyle}
        label={() => <LabelText>CidaDÃO's</LabelText>}
        onPress={() => {}}
      />
      <DrawerItem
        style={whiteStyle}
        label={() => <LabelText>Encontre multirões</LabelText>}
        onPress={() => {}}
      />
      <DrawerItem
        style={whiteStyle}
        label={() => <LabelText>Configurações</LabelText>}
        onPress={() => {}}
      />
      <DrawerItem
        style={whiteStyle}
        label={() => <LabelText>Central de Ajuda</LabelText>}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

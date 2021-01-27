import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import { Text } from 'react-native';

import Profile from '../pages/Profile';
import Home from '../pages/Home';

const { Navigator, Screen } = createDrawerNavigator();

const CustomDrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ padding: 0 }}>
      <DrawerItem
        label={() => <Text>Seu Nome</Text>}
        onPress={() => {}}
      />
      <DrawerItem
        style={{
          backgroundColor: '#4697c6',
          width: '100%',
          marginLeft: 0,
          borderRadius: 0,
          paddingHorizontal: 10,
          marginVertical: 0,
          borderBottomColor: '#d9d9d9',
          borderBottomWidth: 1
        }}
        label="Perfil"
        onPress={() => {}}
      />
      <DrawerItem
        style={{
          backgroundColor: '#4697c6',
          width: '100%',
          marginLeft: 0,
          borderRadius: 0,
          paddingHorizontal: 10,
          marginVertical: 0,
          borderBottomColor: '#d9d9d9',
          borderBottomWidth: 1
        }}
        label="Mensagens"
        onPress={() => {}}
      />
      <DrawerItem
        label="Cadastre um desejo"
        onPress={() => {}}
      />
      <DrawerItem
        label="Meus Desejos"
        onPress={() => {}}
      />
      <DrawerItem
        label="Desejos mais populares"
        onPress={() => {}}
      />
      <DrawerItem
        label="Desejos atendidos"
        onPress={() => {}}
      />
      <DrawerItem
        label="CidaDÃO's"
        onPress={() => {}}
      />
      <DrawerItem
        label="Encontre multirões"
        onPress={() => {}}
      />
      <DrawerItem
        label="Configurações"
        onPress={() => {}}
      />
      <DrawerItem
        label="Central de Ajuda"
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
}

const DrawerTabs: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      overlayColor="transparent"
      drawerContent={CustomDrawerContent}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}

export default DrawerTabs;

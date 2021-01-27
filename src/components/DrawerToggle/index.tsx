import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { Container, Strip } from './styles';

interface Props {
  toggleDrawer: (event: GestureResponderEvent) => void;
}

const DrawerToggle: React.FC<Props> = ({ toggleDrawer }) => {
  return (
    <Container onPress={toggleDrawer}>
      <Strip />
      <Strip />
      <Strip />
    </Container>
  )
}

export default DrawerToggle;

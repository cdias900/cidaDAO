import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import CustomDrawerContent from '../components/CustomDrawerContent';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerTabs: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      overlayColor="transparent"
      drawerContent={CustomDrawerContent}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

export default DrawerTabs;

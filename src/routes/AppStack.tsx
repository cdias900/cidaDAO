import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/Splash';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import DrawerTabs from './DrawerTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none" initialRouteName="Splash" >
        <Screen name="Splash" component={Splash} />
        <Screen name="Home" component={DrawerTabs} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;

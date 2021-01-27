import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, LoginBtn, LoginBtnText, RegisterBtn, RegisterText, Logo } from './styles';

const Splash: React.FC = () => {
  const { navigate, reset } = useNavigation();

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('token');
      if(token) reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
    getToken();
  }, []);

  const navigateToLogin = () => {
    navigate('Login');
  }

  const navigateToRegister = () => {
    navigate('Register');
  }

  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />
      <LoginBtn onPress={navigateToLogin}>
        <LoginBtnText>LOGIN</LoginBtnText>
      </LoginBtn>
      <RegisterText>ou</RegisterText>
      <RegisterBtn onPress={navigateToRegister}>
        <RegisterText>CADASTRE-SE</RegisterText>
      </RegisterBtn>
    </Container>
  );
}

export default Splash;

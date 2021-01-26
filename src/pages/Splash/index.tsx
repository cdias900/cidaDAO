import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, LoginBtn, LoginBtnText, RegisterBtn, RegisterText } from './styles';

const Splash: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToLogin = () => {
    navigate('Login');
  }

  const navigateToRegister = () => {
    navigate('Register');
  }

  return (
    <Container>
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

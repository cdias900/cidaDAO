import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, TopText, Input, Label, LoginBtn, LoginBtnText, PassText, ForgotPassBtn, BtnContainer } from './styles';

const Login: React.FC = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const { navigate } = useNavigation();

  const handleLogin = () => {
    if(user === '' || pass === '') return;
    api.post('/login', {}, {
      auth: {
      username: user,
      password: pass
      }
    })
      .then(async (res) => {
        await AsyncStorage.setItem('token', res.data.token);
        navigate('Home');
      })
      .catch(err => console.log(err));
  }

  const navigateToForgotPassword = () => {
    navigate('ForgotPassword');
  }

  return (
    <Container>
      <TopText>Olá!</TopText>
      <TopText>Faça seu login para continuar:</TopText>
      <BtnContainer>
        <Label>USUÁRIO</Label>
        <Input onChangeText={setUser} />
        <Label>SENHA</Label>
        <Input secureTextEntry onChangeText={setPass} />
        <ForgotPassBtn onPress={navigateToForgotPassword}>
          <PassText>ESQUECI MINHA SENHA</PassText>
        </ForgotPassBtn>
        <LoginBtn onPress={handleLogin}>
          <LoginBtnText>LOGIN</LoginBtnText>
        </LoginBtn>
      </BtnContainer>
    </Container>
  );
}

export default Login;

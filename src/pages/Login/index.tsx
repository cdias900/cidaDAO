import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, TopText, Input, Label, LoginBtn, LoginBtnText } from './styles';

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
      .then(res => {
        localStorage.setItem('token', res.data);
        navigate('Home');
      })
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <TopText>Olá!</TopText>
      <TopText>Faça seu login para continuar:</TopText>
      <Label>USUÁRIO</Label>
      <Input onChangeText={setUser} />
      <Label>SENHA</Label>
      <Input secureTextEntry onChangeText={setPass} />
      <LoginBtn onPress={handleLogin}>
        <LoginBtnText>LOGIN</LoginBtnText>
      </LoginBtn>
    </Container>
  );
}

export default Login;

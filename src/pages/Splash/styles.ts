import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #4697c6;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const LoginBtn = styled.TouchableOpacity`
  width: 70%;
  background-color: #fff;
  border-radius: 32px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin: 8px;
`

export const RegisterBtn = styled.TouchableOpacity`
  width: 70%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Text = styled.Text`
  font-weight: 700;
  font-size: 24px;
`;

export const LoginBtnText = styled(Text)`
  color: #8f8b8a;
`;

export const RegisterText = styled(Text)`
  font-weight: 500;
  color: #fff;
`;

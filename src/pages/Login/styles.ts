import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: #4697c6;
`;

export const TopText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;

export const Input = styled.TextInput`
  color: #fff;
  border-bottom-color: #c6d0d6;
  border-bottom-width: 3px;
  padding: 4px 0;
  width: 95%;
  font-size: 20px;
`;

export const Label = styled.Text`
  margin: 8px 8px 0;
  align-self: flex-start;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
`;

export const LoginBtn = styled.TouchableOpacity`
  width: 50%;
  background-color: #fff;
  border-radius: 32px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin: 8px;
`

export const LoginBtnText = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: #8f8b8a;
`;

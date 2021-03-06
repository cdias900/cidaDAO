import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #2b85b8;
  border-radius: 100px;
  padding: 8px;
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 1000;
`;

export const Strip = styled.View`
  background-color: #fff;
  width: 75%;
  height: 5px;
`;

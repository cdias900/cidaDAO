import styled from 'styled-components/native';

interface Props {
  last?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  margin-top: 32px;
  background-color: #fff;
`;

export const Title = styled.Text`
color: #737373;
  font-weight: 700;
  font-size: 24px;
  margin: 16px 0 8px;
`;

export const MsgContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: #d9d9d9;
  border-top-width: 1px;
  border-bottom-width: ${(props: Props) => props.last ? '1px' : '0px'};
  padding: 8px 0;
`;

export const UserImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const Name = styled.Text`
  font-weight: 700;
  color: #737373;
  font-size: 20px;
  margin-right: 8px;
`;

export const Username = styled.Text`
  color: #737373;
  font-size: 16px;
`;

export const Msg = styled.Text`
  color: #737373;
  align-self: flex-start;
  font-size: 16px;
`;

export const UserContainer = styled.View`
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  padding: 8px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;


export const CloseButton = styled.Image`
  margin-top: 8px;
  width: 24px;
  height: 24px;
`;

export const SearchBar = styled.TextInput`
  background-color: #d9d9d9;
  color: #000;
  padding: 4px 32px;
  width: 100%;
  margin-bottom: 16px;
`;

export const SearchIcon = styled.Image`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  left: 8px;
  z-index: 100;
  tint-color: #737373;
`;

export const SearchContainer = styled.View`
  position: relative;
  width: 100%;
`;

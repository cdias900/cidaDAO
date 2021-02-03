import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BottomBar = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BottomBarText = styled.Text`
  background-color: #2b85b8;
  text-align: center;
  text-align-vertical: center;
  width: 100%;
  height: 80px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
`;

export const BottomBarInputView = styled.View`
  background-color: #fff;
  width: 100%;
  min-height: 80px;
  justify-content: center;
  align-items: center;
`;

export const BottomBarInput = styled.TextInput`
  background-color: #4697c6;
  color: #fff;
  padding: 4px 8px;
  width: 300px;
  margin: 16px;
`;

export const AddressesContainer = styled.ScrollView`
  width: 100%;
  max-height: 350px;
`;

export const AdressTextButton = styled.TouchableOpacity`
  width: 100%;
  margin-vertical: 4px;
  padding-vertical: 4px;
  border-top-color: #d9d9d9;
  border-top-width: 1px;
`;

export const AddressText = styled.Text`
  width: 80%;
  color: #737373;
  font-size: 18px;
  margin-horizontal: 4px;
`;

export const MapOverlay = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  height: 100%;
  width: 20px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%
`;

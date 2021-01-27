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
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
`;

export const BottomBarTitle = styled.Text`
  background-color: #fff;
`;

export const BottomBarText = styled.Text`
  color: #737373;
  font-weight: 700;
  font-size: 24px;
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

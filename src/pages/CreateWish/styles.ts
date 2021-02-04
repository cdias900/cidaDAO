import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import MapView from 'react-native-maps';

interface ImgProps {
  noMargin?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 32px;
  margin-top: 32px;
`;

export const SubTitle = styled.Text`
  color: #737373;
  font-size: 18px;
`;

export const Title = styled(SubTitle)`
  font-weight: 700;
  font-size: 24px;
  margin-top: 16px;
`;

export const Label = styled(SubTitle)`
  font-weight: 700;
  font-size: 22px;
  margin: 8px 0;
`;

export const Input = styled.TextInput`
  background-color: #d9d9d9;
  color: #737373;
  width: 100%;
  justify-content: flex-start;
  padding: 8px 24px;
  height: 40px;
  font-size: 16px;
  text-align-vertical: top;
`;

export const ImgContainer = styled.FlatList`
  width: 100%;
  margin-bottom: 32px;
`;

export const Img = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: ${(props: ImgProps) => props.noMargin ? '0px' : '16px'};
`;

export const CloseButton = styled.Image`
  margin-top: 8px;
  width: 24px;
  height: 24px;
`;

export const SendBtn = styled.TouchableOpacity`
  width: 70%;
  background-color: #4697c6;
  border-radius: 32px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-vertical: 16px;
`

export const SendBtnText = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
`;

export const TextArea = styled.TextInput`
  background-color: #d9d9d9;
  color: #737373;
  width: 100%;
  justify-content: flex-start;
  padding: 8px 24px;
  height: 130px;
  font-size: 16px;
  text-align-vertical: top;
`;

export const MapContainer = styled.View`
  width: 100%;
  height: 250px;
  border-color: #d9d9d9;
  border-width: 2px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%
`;

export const pickerStyle = {
  inputIOS: {
    height: 50,
    backgroundColor: '#d9d9d9',
    color: '#737373',
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    width: Dimensions.get('window').width - 64
  },

  inputAndroid: {
    height: 50,
    backgroundColor: '#d9d9d9',
    color: '#737373',
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    width: Dimensions.get('window').width - 64
  },

  placeholder: {
    color: '#737373',
  }
}

import styled from 'styled-components/native';

export const whiteStyle = {
  width: '100%',
  marginLeft: 0,
  borderRadius: 0,
  paddingHorizontal: 10,
  marginVertical: 0,
  borderBottomColor: '#d9d9d9',
  borderBottomWidth: 1
};

export const blueStyle = {
  ...whiteStyle,
  backgroundColor: '#4697c6'
}

export const ProfilePicContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProfilePic = styled.Image`
  width: 64px;
  height: 64px;
`;

export const ProfileText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  margin: 16px;
`;

export const LabelText = styled.Text`
  flex: 1;
  color: #717273;
  font-size: 18px;
`;

export const BlueLabelText = styled(LabelText)`
  color: #fff;
`;

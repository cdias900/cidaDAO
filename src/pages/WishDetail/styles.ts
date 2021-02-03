import styled from 'styled-components/native';

interface Props {
  noMargin?: boolean;
  center?: boolean;
  liked?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  margin-top: 32px;
`;

export const Description = styled.Text`
  color: #737373;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Title = styled(Description)`
  font-weight: 700;
  font-size: 24px;
  margin: 8px 0;
  align-self: ${(props: Props) => props.center ? 'center' : 'auto'};
`;

export const ImgContainer = styled.FlatList`
  width: 100%;
  margin-bottom: 32px;
  max-height: 160px;
`;

export const Img = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: ${(props: Props) => props.noMargin ? '0px' : '16px'};
`;

export const LikeCount = styled.Text`
  background-color: #2b85b8;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 8px;
  margin-bottom: 16px;
`;

export const LikeButton = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  flex-direction: row;
  width: 100%;
`;

export const LikeButtonText = styled.Text`
  color: #000;
  margin-left: 8px;
  text-align-vertical: center;
`;

export const LikeIcon = styled.Image`
  width: 48px;
  height: 48px;
  tint-color: ${(props: Props) => props.liked ? '#ff914d' : '#d9d9d9'}
`;

export const CloseButton = styled.Image`
  margin-top: 8px;
  width: 24px;
  height: 24px;
`;

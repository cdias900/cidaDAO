import styled from 'styled-components/native';

interface ImgProps {
  noMargin?: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  margin-top: 32px;
`;

export const Description = styled.Text`
  color: #737373;
  font-size: 18px;
`;

export const Title = styled(Description)`
  font-weight: 700;
  font-size: 24px;
  margin-top: 8px;
`;

export const ImgContainer = styled.FlatList`
  width: 100%;
  margin-bottom: 32px;
`;

export const Img = styled.Image`
  width: 320px;
  height: 320px;
  margin-right: ${(props: ImgProps) => props.noMargin ? '0px' : '16px'};
`;

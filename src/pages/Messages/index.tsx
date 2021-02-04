import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Msg,
  MsgContainer,
  UserContainer,
  NameContainer,
  Name,
  UserImage,
  Username,
  CloseButton,
  Title,
  SearchBar,
  SearchIcon,
  SearchContainer
} from './styles';

const Messages: React.FC = () => {
  const { goBack } = useNavigation();
  const [search, setSearch] = useState('');
  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <CloseButton source={require('../../assets/close-button.png')} />
      </TouchableOpacity>
      <Title>Mensagens</Title>
      <SearchContainer>
        <SearchIcon source={require('../../assets/search.png')} />
        <SearchBar value={search} onChangeText={setSearch} />
      </SearchContainer>
      <MsgContainer>
        <UserImage source={require('../../assets/profile.png')} />
        <UserContainer>
          <NameContainer>
            <Name>Usuário1</Name>
            <Username>@usuário1</Username>
          </NameContainer>
          <Msg>Conteúdo da mensagem</Msg>
        </UserContainer>
      </MsgContainer>
      <MsgContainer>
        <UserImage source={require('../../assets/profile.png')} />
        <UserContainer>
          <NameContainer>
            <Name>Usuário2</Name>
            <Username>@usuário2</Username>
          </NameContainer>
          <Msg>Conteúdo da mensagem</Msg>
        </UserContainer>
      </MsgContainer>
      <MsgContainer>
        <UserImage source={require('../../assets/profile.png')} />
        <UserContainer>
          <NameContainer>
            <Name>Usuário3</Name>
            <Username>@usuário3</Username>
          </NameContainer>
          <Msg>Conteúdo da mensagem</Msg>
        </UserContainer>
      </MsgContainer>
      <MsgContainer last>
        <UserImage source={require('../../assets/profile.png')} />
        <UserContainer>
          <NameContainer>
            <Name>Usuário4</Name>
            <Username>@usuário4</Username>
          </NameContainer>
          <Msg>Conteúdo da mensagem</Msg>
        </UserContainer>
      </MsgContainer>
    </Container>
  );
}

export default Messages;

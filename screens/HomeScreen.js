import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AddFolderButton from '../components/Home/AddFolderButton';
import styled from 'styled-components/native';
import AddLinkButton from '../components/Home/AddLinkButton';
import {
  hightPercentage,
  widthPercentage,
  fontPercentage,
} from '../utils/ResponsivResize';
import LinkListItem from '../components/Home/LinkListItem';
const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Title = styled.Text`
  position: absolute;
  width: ${widthPercentage(62)}px;
  height: ${hightPercentage(22)}px;
  left: ${widthPercentage(25)}px;
  top: ${hightPercentage(57)}px;

  /* font-family: 'SUIT'; */
  font-style: normal;
  font-weight: 800;

  font-size: ${fontPercentage(20)}px;
  line-height: ${hightPercentage(26)}px;
  letter-spacing: ${widthPercentage(-0.16)}px;
  color: #000000;
`;
const Divider = styled.View`
  position: absolute;
  height: 0px;
  left: ${widthPercentage(25)}px;
  right: ${widthPercentage(20)}px;
  top: ${hightPercentage(253)}px;
  border: 1px solid #e6e6e6;
`;
const LinkList = styled.FlatList`
  flex: 1;
  position: absolute;
`;
const Home = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container>
      <Title>링따가</Title>
      <AddLinkButton />
      <AddFolderButton />
      <Divider />
    </Container>
  );
};

export default Home;

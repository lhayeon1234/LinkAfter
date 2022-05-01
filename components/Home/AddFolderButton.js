import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import AddFolderIcon from '../../assets/images/add_folder.svg';
import styled from 'styled-components/native';
import {
  hightPercentage,
  widthPercentage,
  fontPercentage,
} from '../../utils/ResponsivResize';
const Container = styled.View``;
const AddFolder = styled.View`
  flex: 1;
  position: absolute;
  width: ${widthPercentage(29.08)}px;
  height: ${hightPercentage(25.08)}px;
  left: ${widthPercentage(25)}px;
  top: ${hightPercentage(201)}px;
`;
const AddFolderText = styled.Text`
  position: absolute;
  width: ${widthPercentage(262)}px;
  height: ${hightPercentage(15)}px;
  top: ${hightPercentage(197)}px;
  left: 20%;

  /* font-family: 'SUIT'; */
  font-style: normal;
  font-weight: 400;

  font-size: ${fontPercentage(16)}px;
  line-height: ${hightPercentage(16)}px;
  letter-spacing: ${widthPercentage(-0.16)}px;
  color: #afafaf;
`;
const SubText = styled.Text`
  position: absolute;
  width: ${widthPercentage(160)}px;
  height: ${hightPercentage(15)}px;
  top: ${hightPercentage(217)}px;
  left: 20%;
  /* left: calc(50% - 160px / 2 - 22px); */

  /* font-family: 'SUIT'; */
  font-style: normal;
  font-weight: 400;

  font-size: ${fontPercentage(11)}px;
  line-height: ${hightPercentage(16)}px;
  letter-spacing: ${widthPercentage(-0.16)}px;

  color: #c5c5c5;
`;

const AddFolderButton = () => {
  return (
    <Container>
      <Pressable>
        <AddFolder>
          <AddFolderIcon />
        </AddFolder>
        <AddFolderText>폴더 이름을 무엇으로 지을까요?</AddFolderText>
        <SubText>2022. 04. 12 - 0개의 항목</SubText>
      </Pressable>
    </Container>
  );
};

export default AddFolderButton;

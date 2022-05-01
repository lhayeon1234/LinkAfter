import React from 'react';
import {View, Pressable, Text} from 'react-native';
import styled from 'styled-components/native';
import Plus_icon from '../../assets/images/plus_icon.svg';
import {
  hightPercentage,
  widthPercentage,
  fontPercentage,
} from '../../utils/ResponsivResize';
const Container = styled.View``;
const Button = styled.Pressable`
  position: absolute;
  flex: 1;
  width: ${widthPercentage(315)}px;
  height: ${hightPercentage(56)}px;
  left: ${widthPercentage(25)}px;
  top: ${hightPercentage(110)}px;
  background-color: #f7f7f7;
  border-radius: 15px;
`;
const PlusIcon = styled.View`
  position: absolute;
  width: ${widthPercentage(31)}px;
  height: ${hightPercentage(31)}px;
  left: ${widthPercentage(19)}px;
  top: ${hightPercentage(14)}px;
`;
const AddLinkText = styled.Text`
  position: absolute;
  width: ${widthPercentage(180)}px;
  height: ${hightPercentage(20)}px;
  top: ${hightPercentage(17)}px;
  left: ${widthPercentage(60)}px;

  /* font-family: 'SUIT'; */
  font-style: normal;
  font-weight: 400;

  font-size: ${fontPercentage(16)}px;
  line-height: ${hightPercentage(24)}px;
  letter-spacing: ${widthPercentage(-0.16)}px;
  color: #afafaf;
`;
const AddLinkButton = () => {
  return (
    <Container>
      <Button>
        <PlusIcon>
          <Plus_icon />
        </PlusIcon>
        <AddLinkText>링크를 추가해 보관하세요 </AddLinkText>
      </Button>
    </Container>
  );
};

export default AddLinkButton;

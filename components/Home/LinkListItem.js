import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';
import {
  hightPercentage,
  widthPercentage,
  fontPercentage,
} from '../../utils/ResponsivResize';
const LinkImage = styled.Image`
  /* position: absolute; */
  left: ${widthPercentage(25)}px;
  top: ${hightPercentage(201)}px;
  width: ${widthPercentage(60)}px;
  height: ${widthPercentage(60)}px;
`;
const LinkTitle = styled.Text`
  /* position: absolute; */
  width: ${widthPercentage(235)}px;
  height: ${hightPercentage(38)}px;
  /* top: ${hightPercentage(197)}px; */
  left: 20%;

  /* font-family: 'SUIT'; */
  font-style: normal;
  font-weight: 400;

  font-size: ${fontPercentage(15)}px;
  line-height: ${hightPercentage(20)}px;
  letter-spacing: ${widthPercentage(-0.16)}px;
  color: #010101;
`;
const LinkUrl = styled.Text`
  /* position: absolute; */
  width: ${widthPercentage(224)}px;
  height: ${hightPercentage(16)}px;
  /* top: ${hightPercentage(217)}px; */
  left: 20%;
  /* left: calc(50% - 160px / 2 - 22px); */

  /* font-family: 'SUIT'; */
  font-style: normal;
  font-weight: 400;

  font-size: ${fontPercentage(12)}px;
  line-height: ${hightPercentage(16)}px;
  letter-spacing: ${widthPercentage(-0.16)}px;

  color: #c5c5c5;
`;
const LinkListItem = () => {
  return (
    <View>
      <LinkImage source={{uri: 'data:../../assets/images/link1.jpg'}} />
      <LinkTitle>
        신기방기 경기도 이색 맛집 18곳 총정리버전 필수 구독☆☆☆
      </LinkTitle>
      <LinkUrl>https://thenounproject.com/search/icon…</LinkUrl>
    </View>
  );
};

export default LinkListItem;

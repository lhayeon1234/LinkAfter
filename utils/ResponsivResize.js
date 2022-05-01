import {} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 812;

export function widthPercentage(width) {
  const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
  return responsiveWidth(percentage);
}

export function hightPercentage(hight) {
  const percentage = (hight / FIGMA_WINDOW_HEIGHT) * 100;
  return responsiveHeight(percentage);
}

export function fontPercentage(size) {
  const percentage = size * 0.135;
  return responsiveFontSize(percentage);
}

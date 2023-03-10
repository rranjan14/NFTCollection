import {Platform, PixelRatio, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// based on a 5-inch device
const scale = width > height ? height / 680 : width / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

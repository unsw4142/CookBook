import { Dimensions as RNDimensions, Alert } from 'react-native';// Tablet portrait dimensions


const tablet = {
width: 750,
height: 700,
};
class DimensionsUniversalApp {

  getPortraitDimensions() {
    const { width, height } = RNDimensions.get("window");
    return {
      width: Math.min(width, height),
      height: Math.max(width, height),
    };
  }
  getLandscapeDimensions() {
    const { width, height } = RNDimensions.get("window");
    return {
      width: Math.max(width, height),
      height: Math.min(width, height),
    };
  }
  isPhone() {
    const dim = this.getPortraitDimensions();
    return dim.height < tablet.height;
  }
  isTablet() {
    const dim = this.getPortraitDimensions();
    return dim.height >= tablet.height;
  }
}
const dimensions = new DimensionsUniversalApp();
export default dimensions;

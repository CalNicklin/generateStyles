// import { DimensionValue, TextStyle } from 'react-native'
import { transformFontStyles } from "./generateTextStyles.mjs";
// import { generateFontFamilies } from "./generateFontFamilies.mjs";
import { Bold, Display } from "./styles.js";
// export const designSystemHeight = 844
// export const designSystemWidth = 390

// export const scaleHeight = (value: number) => {
//   return (value / designSystemHeight) * 100
// }

// export const scaleWidth = (value: number) => {
//   return (value / designSystemWidth) * 100
// }

// export const spacing = {
//   [4]: `${scaleWidth(4)}%` as DimensionValue,
//   [8]: `${scaleWidth(8)}%` as DimensionValue,
//   [16]: `${scaleWidth(16)}%` as DimensionValue,
//   [24]: `${scaleWidth(24)}%` as DimensionValue,
//   [32]: `${scaleWidth(32)}%` as DimensionValue,
//   [40]: `${scaleWidth(40)}%` as DimensionValue,
//   [80]: `${scaleWidth(80)}%` as DimensionValue,
//   [180]: `${scaleWidth(180)}%` as DimensionValue,
// }

transformFontStyles(Bold);
transformFontStyles(Display);


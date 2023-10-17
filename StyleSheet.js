// import { DimensionValue, TextStyle } from 'react-native'
import { generateFontFamilies } from "./generateFontFamilies.mjs";
import { transformFontStyles } from "./generateTextStyles.mjs";
// import { generateFontFamilies } from "./generateFontFamilies.mjs";
import { Bold, Display, fontFamilies, fontWeights, Light } from "./styles.js";
import output from './output.json' assert { type: "json" };



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

transformFontStyles(output);
generateFontFamilies(output);
export const textStyles = {
  "B14": {
    "fontFamily": "PoppinsBold",
    "fontSize": 128,
    "lineHeight": "128 * 0.94",
    "paddingTop": "128 - 128 * 0.94",
    "color": "#FFFFFF"
  },
  "B13": {
    "fontFamily": "PoppinsBold",
    "fontSize": 96,
    "lineHeight": "96 * 0.94",
    "paddingTop": "96 - 96 * 0.94",
    "color": "#FFFFFF"
  },
  "B125": {
    "fontFamily": "PoppinsBold",
    "fontSize": 94,
    "lineHeight": "94 * 0.94",
    "paddingTop": "94 - 94 * 0.94",
    "color": "#FFFFFF"
  },
  "B12": {
    "fontFamily": "PoppinsBold",
    "fontSize": 72,
    "lineHeight": "72 * 0.94",
    "paddingTop": "72 - 72 * 0.94",
    "color": "#FFFFFF"
  },
  "B11": {
    "fontFamily": "PoppinsBold",
    "fontSize": 60,
    "lineHeight": "60 * 0.94",
    "paddingTop": "60 - 60 * 0.94",
    "color": "#FFFFFF"
  },
  "B115": {
    "fontFamily": "PoppinsBold",
    "fontSize": 64,
    "lineHeight": "64 * 0.94",
    "paddingTop": "64 - 64 * 0.94",
    "color": "#FFFFFF"
  },
  "B105": {
    "fontFamily": "PoppinsBold",
    "fontSize": 56,
    "lineHeight": "56 * 0.94",
    "paddingTop": "56 - 56 * 0.94",
    "color": "#FFFFFF"
  },
  "B10": {
    "fontFamily": "PoppinsBold",
    "fontSize": 48,
    "lineHeight": "48 * 0.94",
    "paddingTop": "48 - 48 * 0.94",
    "color": "#FFFFFF"
  },
  "B9": {
    "fontFamily": "PoppinsBold",
    "fontSize": 44,
    "lineHeight": "44 * 0.94",
    "paddingTop": "44 - 44 * 0.94",
    "color": "#FFFFFF"
  },
  "B8": {
    "fontFamily": "PoppinsBold",
    "fontSize": 42,
    "lineHeight": "42 * 0.110",
    "paddingTop": "42 - 42 * 0.110",
    "color": "#FFFFFF"
  },
  "B7": {
    "fontFamily": "PoppinsBold",
    "fontSize": 40,
    "lineHeight": "40 * 0.110",
    "paddingTop": "40 - 40 * 0.110",
    "color": "#FFFFFF"
  },
  "B6": {
    "fontFamily": "PoppinsBold",
    "fontSize": 38,
    "lineHeight": "38 * 0.110",
    "paddingTop": "38 - 38 * 0.110",
    "color": "#FFFFFF"
  },
  "B5": {
    "fontFamily": "PoppinsBold",
    "fontSize": 36,
    "lineHeight": "36 * 0.110",
    "paddingTop": "36 - 36 * 0.110",
    "color": "#FFFFFF"
  },
  "B4": {
    "fontFamily": "PoppinsBold",
    "fontSize": 34,
    "lineHeight": "34 * 0.110",
    "paddingTop": "34 - 34 * 0.110",
    "color": "#FFFFFF"
  },
  "B3": {
    "fontFamily": "PoppinsBold",
    "fontSize": 32,
    "lineHeight": "32 * 0.110",
    "paddingTop": "32 - 32 * 0.110",
    "color": "#FFFFFF"
  },
  "B2": {
    "fontFamily": "PoppinsBold",
    "fontSize": 30,
    "lineHeight": "30 * 0.110",
    "paddingTop": "30 - 30 * 0.110",
    "color": "#FFFFFF"
  },
  "B1": {
    "fontFamily": "PoppinsBold",
    "fontSize": 28,
    "lineHeight": "28 * 0.110",
    "paddingTop": "28 - 28 * 0.110",
    "color": "#FFFFFF"
  },
  "BS": {
    "fontFamily": "PoppinsBold",
    "fontSize": 26,
    "lineHeight": "26 * 0.110",
    "paddingTop": "26 - 26 * 0.110",
    "color": "#FFFFFF"
  },
  "BXS": {
    "fontFamily": "PoppinsBold",
    "fontSize": 24,
    "lineHeight": "24 * 0.110",
    "paddingTop": "24 - 24 * 0.110",
    "color": "#FFFFFF"
  },
  "BXS1": {
    "fontFamily": "PoppinsBold",
    "fontSize": 22,
    "lineHeight": "22 * 0.110",
    "paddingTop": "22 - 22 * 0.110",
    "color": "#FFFFFF"
  },
  "BXS2": {
    "fontFamily": "PoppinsBold",
    "fontSize": 20,
    "lineHeight": "20 * 0.110",
    "paddingTop": "20 - 20 * 0.110",
    "color": "#FFFFFF"
  },
  "BXS3": {
    "fontFamily": "PoppinsBold",
    "fontSize": 18,
    "lineHeight": "18 * 0.110",
    "paddingTop": "18 - 18 * 0.110",
    "color": "#FFFFFF"
  },
  "BXS4": {
    "fontFamily": "PoppinsBold",
    "fontSize": 16,
    "lineHeight": "16 * 0.110",
    "paddingTop": "16 - 16 * 0.110",
    "color": "#FFFFFF"
  },
  "BXS5": {
    "fontFamily": "PoppinsBold",
    "fontSize": 14,
    "lineHeight": "14 * 0.110",
    "paddingTop": "14 - 14 * 0.110",
    "color": "#FFFFFF"
  },
  "BXS6": {
    "fontFamily": "PoppinsBold",
    "fontSize": 12,
    "lineHeight": "12 * 0.110",
    "paddingTop": "12 - 12 * 0.110",
    "color": "#FFFFFF"
  },
  "BXS7": {
    "fontFamily": "PoppinsBold",
    "fontSize": 10,
    "lineHeight": "10 * 0.110",
    "paddingTop": "10 - 10 * 0.110",
    "color": "#FFFFFF"
  },
  "D14": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 128,
    "lineHeight": "128 * 0.94",
    "paddingTop": "128 - 128 * 0.94",
    "color": "#FFFFFF"
  },
  "D125": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 94,
    "lineHeight": "94 * 0.94",
    "paddingTop": "94 - 94 * 0.94",
    "color": "#FFFFFF"
  },
  "D12": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 72,
    "lineHeight": "72 * 0.94",
    "paddingTop": "72 - 72 * 0.94",
    "color": "#FFFFFF"
  },
  "D115": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 62,
    "lineHeight": "62 * 0.94",
    "paddingTop": "62 - 62 * 0.94",
    "color": "#FFFFFF"
  },
  "D11": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 56,
    "lineHeight": "56 * 0.94",
    "paddingTop": "56 - 56 * 0.94",
    "color": "#FFFFFF"
  },
  "D10": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 48,
    "lineHeight": "48 * 0.94",
    "paddingTop": "48 - 48 * 0.94",
    "color": "#FFFFFF"
  },
  "D9": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 44,
    "lineHeight": "44 * 0.94",
    "paddingTop": "44 - 44 * 0.94",
    "color": "#FFFFFF"
  },
  "D8": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 42,
    "lineHeight": "42 * 0.110",
    "paddingTop": "42 - 42 * 0.110",
    "color": "#FFFFFF"
  },
  "D7": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 40,
    "lineHeight": "40 * 0.110",
    "paddingTop": "40 - 40 * 0.110",
    "color": "#FFFFFF"
  },
  "D6": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 38,
    "lineHeight": "38 * 0.110",
    "paddingTop": "38 - 38 * 0.110",
    "color": "#FFFFFF"
  },
  "D5": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 36,
    "lineHeight": "36 * 0.110",
    "paddingTop": "36 - 36 * 0.110",
    "color": "#FFFFFF"
  },
  "D4": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 34,
    "lineHeight": "34 * 0.110",
    "paddingTop": "34 - 34 * 0.110",
    "color": "#FFFFFF"
  },
  "D3": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 32,
    "lineHeight": "32 * 0.110",
    "paddingTop": "32 - 32 * 0.110",
    "color": "#FFFFFF"
  },
  "D2": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 30,
    "lineHeight": "30 * 0.110",
    "paddingTop": "30 - 30 * 0.110",
    "color": "#FFFFFF"
  },
  "D1": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 28,
    "lineHeight": "28 * 0.93",
    "paddingTop": "28 - 28 * 0.93",
    "color": "#FFFFFF"
  },
  "DS": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 26,
    "lineHeight": "26 * 0.97",
    "paddingTop": "26 - 26 * 0.97",
    "color": "#FFFFFF"
  },
  "DXS": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 24,
    "lineHeight": "24 * 0.98.5",
    "paddingTop": "24 - 24 * 0.98.5",
    "color": "#FFFFFF"
  },
  "DXS1": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 22,
    "lineHeight": "22 * 0.98.5",
    "paddingTop": "22 - 22 * 0.98.5",
    "color": "#FFFFFF"
  },
  "DXS2": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 20,
    "lineHeight": "20 * 0.110",
    "paddingTop": "20 - 20 * 0.110",
    "color": "#FFFFFF"
  },
  "DXS3": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 18,
    "lineHeight": "18 * 0.100",
    "paddingTop": "18 - 18 * 0.100",
    "color": "#FFFFFF"
  },
  "DXS5": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 14,
    "lineHeight": "14 * 0.110",
    "paddingTop": "14 - 14 * 0.110",
    "color": "#FFFFFF"
  },
  "DXS4": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 16,
    "lineHeight": "16 * 0.110",
    "paddingTop": "16 - 16 * 0.110",
    "color": "#FFFFFF"
  },
  "DXS6": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 12,
    "lineHeight": "12 * 0.110",
    "paddingTop": "12 - 12 * 0.110",
    "color": "#FFFFFF"
  },
  "DXS7": {
    "fontFamily": "PoppinsSemiBold",
    "fontSize": 10,
    "lineHeight": "10 * 0.110",
    "paddingTop": "10 - 10 * 0.110",
    "color": "#FFFFFF"
  },
  "R14": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 128,
    "lineHeight": "128 * 0.128",
    "paddingTop": "128 - 128 * 0.128",
    "color": "#FFFFFF"
  },
  "R13": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 96,
    "lineHeight": "96 * 0.128",
    "paddingTop": "96 - 96 * 0.128",
    "color": "#FFFFFF"
  },
  "R125": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 85,
    "lineHeight": "85 * 0.128",
    "paddingTop": "85 - 85 * 0.128",
    "color": "#FFFFFF"
  },
  "R12": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 72,
    "lineHeight": "72 * 0.140",
    "paddingTop": "72 - 72 * 0.140",
    "color": "#FFFFFF"
  },
  "R11": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 60,
    "lineHeight": "60 * 0.140",
    "paddingTop": "60 - 60 * 0.140",
    "color": "#FFFFFF"
  },
  "R10": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 48,
    "lineHeight": "48 * 0.140",
    "paddingTop": "48 - 48 * 0.140",
    "color": "#FFFFFF"
  },
  "R9": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 44,
    "lineHeight": "44 * 0.140",
    "paddingTop": "44 - 44 * 0.140",
    "color": "#FFFFFF"
  },
  "R8": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 42,
    "lineHeight": "42 * 0.140",
    "paddingTop": "42 - 42 * 0.140",
    "color": "#FFFFFF"
  },
  "R7": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 40,
    "lineHeight": "40 * 0.140",
    "paddingTop": "40 - 40 * 0.140",
    "color": "#FFFFFF"
  },
  "R6": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 38,
    "lineHeight": "38 * 0.140",
    "paddingTop": "38 - 38 * 0.140",
    "color": "#FFFFFF"
  },
  "R5": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 36,
    "lineHeight": "36 * 0.140",
    "paddingTop": "36 - 36 * 0.140",
    "color": "#FFFFFF"
  },
  "R4": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 34,
    "lineHeight": "34 * 0.140",
    "paddingTop": "34 - 34 * 0.140",
    "color": "#FFFFFF"
  },
  "R3": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 32,
    "lineHeight": "32 * 0.140",
    "paddingTop": "32 - 32 * 0.140",
    "color": "#FFFFFF"
  },
  "R2": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 30,
    "lineHeight": "30 * 0.140",
    "paddingTop": "30 - 30 * 0.140",
    "color": "#FFFFFF"
  },
  "R1": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 28,
    "lineHeight": "28 * 0.140",
    "paddingTop": "28 - 28 * 0.140",
    "color": "#FFFFFF"
  },
  "RS": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 26,
    "lineHeight": "26 * 0.140",
    "paddingTop": "26 - 26 * 0.140",
    "color": "#FFFFFF"
  },
  "RXS": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 24,
    "lineHeight": "24 * 0.140",
    "paddingTop": "24 - 24 * 0.140",
    "color": "#FFFFFF"
  },
  "RXS1": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 22,
    "lineHeight": "22 * 0.140",
    "paddingTop": "22 - 22 * 0.140",
    "color": "#FFFFFF"
  },
  "RXS2": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 20,
    "lineHeight": "20 * 0.104.5",
    "paddingTop": "20 - 20 * 0.104.5",
    "color": "#FFFFFF"
  },
  "RXS3": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 18,
    "lineHeight": "18 * 0.130",
    "paddingTop": "18 - 18 * 0.130",
    "color": "#FFFFFF"
  },
  "RXS4": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 16,
    "lineHeight": "16 * 0.98.5",
    "paddingTop": "16 - 16 * 0.98.5",
    "color": "#FFFFFF"
  },
  "RXS5": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 14,
    "lineHeight": "14 * 0.130",
    "paddingTop": "14 - 14 * 0.130",
    "color": "#FFFFFF"
  },
  "RXS6": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 12,
    "lineHeight": "12 * 0.130",
    "paddingTop": "12 - 12 * 0.130",
    "color": "#FFFFFF"
  },
  "RXS7": {
    "fontFamily": "PoppinsRegular",
    "fontSize": 10,
    "lineHeight": "10 * 0.130",
    "paddingTop": "10 - 10 * 0.130",
    "color": "#FFFFFF"
  },
  "L14": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 128,
    "lineHeight": "128 * 0.128",
    "paddingTop": "128 - 128 * 0.128",
    "color": "#FFFFFF"
  },
  "L13": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 96,
    "lineHeight": "96 * 0.128",
    "paddingTop": "96 - 96 * 0.128",
    "color": "#FFFFFF"
  },
  "L125": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 85,
    "lineHeight": "85 * 0.82.5",
    "paddingTop": "85 - 85 * 0.82.5",
    "color": "#FFFFFF"
  },
  "L12": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 72,
    "lineHeight": "72 * 0.140",
    "paddingTop": "72 - 72 * 0.140",
    "color": "#FFFFFF"
  },
  "L11": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 60,
    "lineHeight": "60 * 0.140",
    "paddingTop": "60 - 60 * 0.140",
    "color": "#FFFFFF"
  },
  "L10": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 48,
    "lineHeight": "48 * 0.140",
    "paddingTop": "48 - 48 * 0.140",
    "color": "#FFFFFF"
  },
  "L9": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 44,
    "lineHeight": "44 * 0.140",
    "paddingTop": "44 - 44 * 0.140",
    "color": "#FFFFFF"
  },
  "L8": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 42,
    "lineHeight": "42 * 0.140",
    "paddingTop": "42 - 42 * 0.140",
    "color": "#FFFFFF"
  },
  "L7": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 40,
    "lineHeight": "40 * 0.140",
    "paddingTop": "40 - 40 * 0.140",
    "color": "#FFFFFF"
  },
  "L6": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 38,
    "lineHeight": "38 * 0.140",
    "paddingTop": "38 - 38 * 0.140",
    "color": "#FFFFFF"
  },
  "L5": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 36,
    "lineHeight": "36 * 0.140",
    "paddingTop": "36 - 36 * 0.140",
    "color": "#FFFFFF"
  },
  "L4": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 34,
    "lineHeight": "34 * 0.140",
    "paddingTop": "34 - 34 * 0.140",
    "color": "#FFFFFF"
  },
  "L3": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 32,
    "lineHeight": "32 * 0.140",
    "paddingTop": "32 - 32 * 0.140",
    "color": "#FFFFFF"
  },
  "L2": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 30,
    "lineHeight": "30 * 0.140",
    "paddingTop": "30 - 30 * 0.140",
    "color": "#FFFFFF"
  },
  "L1": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 28,
    "lineHeight": "28 * 0.140",
    "paddingTop": "28 - 28 * 0.140",
    "color": "#FFFFFF"
  },
  "LS": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 26,
    "lineHeight": "26 * 0.140",
    "paddingTop": "26 - 26 * 0.140",
    "color": "#FFFFFF"
  },
  "LXS": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 24,
    "lineHeight": "24 * 0.140",
    "paddingTop": "24 - 24 * 0.140",
    "color": "#FFFFFF"
  },
  "LXS1": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 22,
    "lineHeight": "22 * 0.140",
    "paddingTop": "22 - 22 * 0.140",
    "color": "#FFFFFF"
  },
  "LXS2": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 20,
    "lineHeight": "20 * 0.115.5",
    "paddingTop": "20 - 20 * 0.115.5",
    "color": "#FFFFFF"
  },
  "LXS3": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 18,
    "lineHeight": "18 * 0.130",
    "paddingTop": "18 - 18 * 0.130",
    "color": "#FFFFFF"
  },
  "LXS4": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 16,
    "lineHeight": "16 * 0.130",
    "paddingTop": "16 - 16 * 0.130",
    "color": "#FFFFFF"
  },
  "LXS5": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 14,
    "lineHeight": "14 * 0.130",
    "paddingTop": "14 - 14 * 0.130",
    "color": "#FFFFFF"
  },
  "LXS6": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 12,
    "lineHeight": "12 * 0.130",
    "paddingTop": "12 - 12 * 0.130",
    "color": "#FFFFFF"
  },
  "LXS7": {
    "fontFamily": "PoppinsExtraLight",
    "fontSize": 10,
    "lineHeight": "10 * 0.130",
    "paddingTop": "10 - 10 * 0.130",
    "color": "#FFFFFF"
  }
}
export const fontFamilies = {
  "poppins": "Poppins",
  "Bold": "PoppinsBold",
  "SemiBold": "PoppinsSemiBold",
  "Regular": "PoppinsRegular",
  "ExtraLight": "PoppinsExtraLight"
}
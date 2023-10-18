
import { DimensionValue, TextStyle } from 'react-native'

export const designSystemHeight = 844
export const designSystemWidth = 390

export const scaleHeight = (value: number) => {
  return (value / designSystemHeight) * 100
}

export const scaleWidth = (value: number) => {
  return (value / designSystemWidth) * 100
}

export const spacing = {
  [4]: `${scaleWidth(4)}%` as DimensionValue,
  [8]: `${scaleWidth(8)}%` as DimensionValue,
  [16]: `${scaleWidth(16)}%` as DimensionValue,
  [24]: `${scaleWidth(24)}%` as DimensionValue,
  [32]: `${scaleWidth(32)}%` as DimensionValue,
  [40]: `${scaleWidth(40)}%` as DimensionValue,
  [80]: `${scaleWidth(80)}%` as DimensionValue,
  [180]: `${scaleWidth(180)}%` as DimensionValue,
}


export const fontFamilies = {
 "poppins": "Poppins",
 "Bold": "PoppinsBold",
 "SemiBold": "PoppinsSemiBold",
 "Regular": "PoppinsRegular",
 "ExtraLight": "PoppinsExtraLight"
}

type TextStyles = {
      [key: string]: TextStyle
    }

export const textStyles = {
 B14: {
  fontFamily: fontFamilies.Bold,
  fontSize: 128,
  lineHeight: 128 * 0.94,
  paddingTop: 128 - 128 * 0.94,
  color: #FFFFFF
 },
 B13: {
  fontFamily: fontFamilies.Bold,
  fontSize: 96,
  lineHeight: 96 * 0.94,
  paddingTop: 96 - 96 * 0.94,
  color: #FFFFFF
 },
 B125: {
  fontFamily: fontFamilies.Bold,
  fontSize: 94,
  lineHeight: 94 * 0.94,
  paddingTop: 94 - 94 * 0.94,
  color: #FFFFFF
 },
 B12: {
  fontFamily: fontFamilies.Bold,
  fontSize: 72,
  lineHeight: 72 * 0.94,
  paddingTop: 72 - 72 * 0.94,
  color: #FFFFFF
 },
 B11: {
  fontFamily: fontFamilies.Bold,
  fontSize: 60,
  lineHeight: 60 * 0.94,
  paddingTop: 60 - 60 * 0.94,
  color: #FFFFFF
 },
 B115: {
  fontFamily: fontFamilies.Bold,
  fontSize: 64,
  lineHeight: 64 * 0.94,
  paddingTop: 64 - 64 * 0.94,
  color: #FFFFFF
 },
 B105: {
  fontFamily: fontFamilies.Bold,
  fontSize: 56,
  lineHeight: 56 * 0.94,
  paddingTop: 56 - 56 * 0.94,
  color: #FFFFFF
 },
 B10: {
  fontFamily: fontFamilies.Bold,
  fontSize: 48,
  lineHeight: 48 * 0.94,
  paddingTop: 48 - 48 * 0.94,
  color: #FFFFFF
 },
 B9: {
  fontFamily: fontFamilies.Bold,
  fontSize: 44,
  lineHeight: 44 * 0.94,
  paddingTop: 44 - 44 * 0.94,
  color: #FFFFFF
 },
 B8: {
  fontFamily: fontFamilies.Bold,
  fontSize: 42,
  lineHeight: 42 * 1.1,
  paddingTop: 42 - 42 * 0.110,
  color: #FFFFFF
 },
 B7: {
  fontFamily: fontFamilies.Bold,
  fontSize: 40,
  lineHeight: 40 * 1.1,
  paddingTop: 40 - 40 * 0.110,
  color: #FFFFFF
 },
 B6: {
  fontFamily: fontFamilies.Bold,
  fontSize: 38,
  lineHeight: 38 * 1.1,
  paddingTop: 38 - 38 * 0.110,
  color: #FFFFFF
 },
 B5: {
  fontFamily: fontFamilies.Bold,
  fontSize: 36,
  lineHeight: 36 * 1.1,
  paddingTop: 36 - 36 * 0.110,
  color: #FFFFFF
 },
 B4: {
  fontFamily: fontFamilies.Bold,
  fontSize: 34,
  lineHeight: 34 * 1.1,
  paddingTop: 34 - 34 * 0.110,
  color: #FFFFFF
 },
 B3: {
  fontFamily: fontFamilies.Bold,
  fontSize: 32,
  lineHeight: 32 * 1.1,
  paddingTop: 32 - 32 * 0.110,
  color: #FFFFFF
 },
 B2: {
  fontFamily: fontFamilies.Bold,
  fontSize: 30,
  lineHeight: 30 * 1.1,
  paddingTop: 30 - 30 * 0.110,
  color: #FFFFFF
 },
 B1: {
  fontFamily: fontFamilies.Bold,
  fontSize: 28,
  lineHeight: 28 * 1.1,
  paddingTop: 28 - 28 * 0.110,
  color: #FFFFFF
 },
 BS: {
  fontFamily: fontFamilies.Bold,
  fontSize: 26,
  lineHeight: 26 * 1.1,
  paddingTop: 26 - 26 * 0.110,
  color: #FFFFFF
 },
 BXS: {
  fontFamily: fontFamilies.Bold,
  fontSize: 24,
  lineHeight: 24 * 1.1,
  paddingTop: 24 - 24 * 0.110,
  color: #FFFFFF
 },
 BXS1: {
  fontFamily: fontFamilies.Bold,
  fontSize: 22,
  lineHeight: 22 * 1.1,
  paddingTop: 22 - 22 * 0.110,
  color: #FFFFFF
 },
 BXS2: {
  fontFamily: fontFamilies.Bold,
  fontSize: 20,
  lineHeight: 20 * 1.1,
  paddingTop: 20 - 20 * 0.110,
  color: #FFFFFF
 },
 BXS3: {
  fontFamily: fontFamilies.Bold,
  fontSize: 18,
  lineHeight: 18 * 1.1,
  paddingTop: 18 - 18 * 0.110,
  color: #FFFFFF
 },
 BXS4: {
  fontFamily: fontFamilies.Bold,
  fontSize: 16,
  lineHeight: 16 * 1.1,
  paddingTop: 16 - 16 * 0.110,
  color: #FFFFFF
 },
 BXS5: {
  fontFamily: fontFamilies.Bold,
  fontSize: 14,
  lineHeight: 14 * 1.1,
  paddingTop: 14 - 14 * 0.110,
  color: #FFFFFF
 },
 BXS6: {
  fontFamily: fontFamilies.Bold,
  fontSize: 12,
  lineHeight: 12 * 1.1,
  paddingTop: 12 - 12 * 0.110,
  color: #FFFFFF
 },
 BXS7: {
  fontFamily: fontFamilies.Bold,
  fontSize: 10,
  lineHeight: 10 * 1.1,
  paddingTop: 10 - 10 * 0.110,
  color: #FFFFFF
 },
 D14: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 128,
  lineHeight: 128 * 0.94,
  paddingTop: 128 - 128 * 0.94,
  color: #FFFFFF
 },
 D125: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 94,
  lineHeight: 94 * 0.94,
  paddingTop: 94 - 94 * 0.94,
  color: #FFFFFF
 },
 D12: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 72,
  lineHeight: 72 * 0.94,
  paddingTop: 72 - 72 * 0.94,
  color: #FFFFFF
 },
 D115: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 62,
  lineHeight: 62 * 0.94,
  paddingTop: 62 - 62 * 0.94,
  color: #FFFFFF
 },
 D11: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 56,
  lineHeight: 56 * 0.94,
  paddingTop: 56 - 56 * 0.94,
  color: #FFFFFF
 },
 D10: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 48,
  lineHeight: 48 * 0.94,
  paddingTop: 48 - 48 * 0.94,
  color: #FFFFFF
 },
 D9: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 44,
  lineHeight: 44 * 0.94,
  paddingTop: 44 - 44 * 0.94,
  color: #FFFFFF
 },
 D8: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 42,
  lineHeight: 42 * 1.1,
  paddingTop: 42 - 42 * 0.110,
  color: #FFFFFF
 },
 D7: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 40,
  lineHeight: 40 * 1.1,
  paddingTop: 40 - 40 * 0.110,
  color: #FFFFFF
 },
 D6: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 38,
  lineHeight: 38 * 1.1,
  paddingTop: 38 - 38 * 0.110,
  color: #FFFFFF
 },
 D5: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 36,
  lineHeight: 36 * 1.1,
  paddingTop: 36 - 36 * 0.110,
  color: #FFFFFF
 },
 D4: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 34,
  lineHeight: 34 * 1.1,
  paddingTop: 34 - 34 * 0.110,
  color: #FFFFFF
 },
 D3: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 32,
  lineHeight: 32 * 1.1,
  paddingTop: 32 - 32 * 0.110,
  color: #FFFFFF
 },
 D2: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 30,
  lineHeight: 30 * 1.1,
  paddingTop: 30 - 30 * 0.110,
  color: #FFFFFF
 },
 D1: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 28,
  lineHeight: 28 * 0.93,
  paddingTop: 28 - 28 * 0.93,
  color: #FFFFFF
 },
 DS: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 26,
  lineHeight: 26 * 0.97,
  paddingTop: 26 - 26 * 0.97,
  color: #FFFFFF
 },
 DXS: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 24,
  lineHeight: 24 * 0.985,
  paddingTop: 24 - 24 * 0.99,
  color: #FFFFFF
 },
 DXS1: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 22,
  lineHeight: 22 * 0.985,
  paddingTop: 22 - 22 * 0.99,
  color: #FFFFFF
 },
 DXS2: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 20,
  lineHeight: 20 * 1.1,
  paddingTop: 20 - 20 * 0.110,
  color: #FFFFFF
 },
 DXS3: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 18,
  lineHeight: 18 * 1,
  paddingTop: 18 - 18 * 0.100,
  color: #FFFFFF
 },
 DXS5: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 14,
  lineHeight: 14 * 1.1,
  paddingTop: 14 - 14 * 0.110,
  color: #FFFFFF
 },
 DXS4: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 16,
  lineHeight: 16 * 1.1,
  paddingTop: 16 - 16 * 0.110,
  color: #FFFFFF
 },
 DXS6: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 12,
  lineHeight: 12 * 1.1,
  paddingTop: 12 - 12 * 0.110,
  color: #FFFFFF
 },
 DXS7: {
  fontFamily: fontFamilies.SemiBold,
  fontSize: 10,
  lineHeight: 10 * 1.1,
  paddingTop: 10 - 10 * 0.110,
  color: #FFFFFF
 },
 R14: {
  fontFamily: fontFamilies.Regular,
  fontSize: 128,
  lineHeight: 128 * 1.28,
  paddingTop: 128 - 128 * 0.128,
  color: #FFFFFF
 },
 R13: {
  fontFamily: fontFamilies.Regular,
  fontSize: 96,
  lineHeight: 96 * 1.28,
  paddingTop: 96 - 96 * 0.128,
  color: #FFFFFF
 },
 R125: {
  fontFamily: fontFamilies.Regular,
  fontSize: 85,
  lineHeight: 85 * 1.28,
  paddingTop: 85 - 85 * 0.128,
  color: #FFFFFF
 },
 R12: {
  fontFamily: fontFamilies.Regular,
  fontSize: 72,
  lineHeight: 72 * 1.4,
  paddingTop: 72 - 72 * 0.140,
  color: #FFFFFF
 },
 R11: {
  fontFamily: fontFamilies.Regular,
  fontSize: 60,
  lineHeight: 60 * 1.4,
  paddingTop: 60 - 60 * 0.140,
  color: #FFFFFF
 },
 R10: {
  fontFamily: fontFamilies.Regular,
  fontSize: 48,
  lineHeight: 48 * 1.4,
  paddingTop: 48 - 48 * 0.140,
  color: #FFFFFF
 },
 R9: {
  fontFamily: fontFamilies.Regular,
  fontSize: 44,
  lineHeight: 44 * 1.4,
  paddingTop: 44 - 44 * 0.140,
  color: #FFFFFF
 },
 R8: {
  fontFamily: fontFamilies.Regular,
  fontSize: 42,
  lineHeight: 42 * 1.4,
  paddingTop: 42 - 42 * 0.140,
  color: #FFFFFF
 },
 R7: {
  fontFamily: fontFamilies.Regular,
  fontSize: 40,
  lineHeight: 40 * 1.4,
  paddingTop: 40 - 40 * 0.140,
  color: #FFFFFF
 },
 R6: {
  fontFamily: fontFamilies.Regular,
  fontSize: 38,
  lineHeight: 38 * 1.4,
  paddingTop: 38 - 38 * 0.140,
  color: #FFFFFF
 },
 R5: {
  fontFamily: fontFamilies.Regular,
  fontSize: 36,
  lineHeight: 36 * 1.4,
  paddingTop: 36 - 36 * 0.140,
  color: #FFFFFF
 },
 R4: {
  fontFamily: fontFamilies.Regular,
  fontSize: 34,
  lineHeight: 34 * 1.4,
  paddingTop: 34 - 34 * 0.140,
  color: #FFFFFF
 },
 R3: {
  fontFamily: fontFamilies.Regular,
  fontSize: 32,
  lineHeight: 32 * 1.4,
  paddingTop: 32 - 32 * 0.140,
  color: #FFFFFF
 },
 R2: {
  fontFamily: fontFamilies.Regular,
  fontSize: 30,
  lineHeight: 30 * 1.4,
  paddingTop: 30 - 30 * 0.140,
  color: #FFFFFF
 },
 R1: {
  fontFamily: fontFamilies.Regular,
  fontSize: 28,
  lineHeight: 28 * 1.4,
  paddingTop: 28 - 28 * 0.140,
  color: #FFFFFF
 },
 RS: {
  fontFamily: fontFamilies.Regular,
  fontSize: 26,
  lineHeight: 26 * 1.4,
  paddingTop: 26 - 26 * 0.140,
  color: #FFFFFF
 },
 RXS: {
  fontFamily: fontFamilies.Regular,
  fontSize: 24,
  lineHeight: 24 * 1.4,
  paddingTop: 24 - 24 * 0.140,
  color: #FFFFFF
 },
 RXS1: {
  fontFamily: fontFamilies.Regular,
  fontSize: 22,
  lineHeight: 22 * 1.4,
  paddingTop: 22 - 22 * 0.140,
  color: #FFFFFF
 },
 RXS2: {
  fontFamily: fontFamilies.Regular,
  fontSize: 20,
  lineHeight: 20 * 1.045,
  paddingTop: 20 - 20 * 0.105,
  color: #FFFFFF
 },
 RXS3: {
  fontFamily: fontFamilies.Regular,
  fontSize: 18,
  lineHeight: 18 * 1.3,
  paddingTop: 18 - 18 * 0.130,
  color: #FFFFFF
 },
 RXS4: {
  fontFamily: fontFamilies.Regular,
  fontSize: 16,
  lineHeight: 16 * 0.985,
  paddingTop: 16 - 16 * 0.99,
  color: #FFFFFF
 },
 RXS5: {
  fontFamily: fontFamilies.Regular,
  fontSize: 14,
  lineHeight: 14 * 1.3,
  paddingTop: 14 - 14 * 0.130,
  color: #FFFFFF
 },
 RXS6: {
  fontFamily: fontFamilies.Regular,
  fontSize: 12,
  lineHeight: 12 * 1.3,
  paddingTop: 12 - 12 * 0.130,
  color: #FFFFFF
 },
 RXS7: {
  fontFamily: fontFamilies.Regular,
  fontSize: 10,
  lineHeight: 10 * 1.3,
  paddingTop: 10 - 10 * 0.130,
  color: #FFFFFF
 },
 L14: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 128,
  lineHeight: 128 * 1.28,
  paddingTop: 128 - 128 * 0.128,
  color: #FFFFFF
 },
 L13: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 96,
  lineHeight: 96 * 1.28,
  paddingTop: 96 - 96 * 0.128,
  color: #FFFFFF
 },
 L125: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 85,
  lineHeight: 85 * 0.825,
  paddingTop: 85 - 85 * 0.83,
  color: #FFFFFF
 },
 L12: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 72,
  lineHeight: 72 * 1.4,
  paddingTop: 72 - 72 * 0.140,
  color: #FFFFFF
 },
 L11: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 60,
  lineHeight: 60 * 1.4,
  paddingTop: 60 - 60 * 0.140,
  color: #FFFFFF
 },
 L10: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 48,
  lineHeight: 48 * 1.4,
  paddingTop: 48 - 48 * 0.140,
  color: #FFFFFF
 },
 L9: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 44,
  lineHeight: 44 * 1.4,
  paddingTop: 44 - 44 * 0.140,
  color: #FFFFFF
 },
 L8: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 42,
  lineHeight: 42 * 1.4,
  paddingTop: 42 - 42 * 0.140,
  color: #FFFFFF
 },
 L7: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 40,
  lineHeight: 40 * 1.4,
  paddingTop: 40 - 40 * 0.140,
  color: #FFFFFF
 },
 L6: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 38,
  lineHeight: 38 * 1.4,
  paddingTop: 38 - 38 * 0.140,
  color: #FFFFFF
 },
 L5: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 36,
  lineHeight: 36 * 1.4,
  paddingTop: 36 - 36 * 0.140,
  color: #FFFFFF
 },
 L4: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 34,
  lineHeight: 34 * 1.4,
  paddingTop: 34 - 34 * 0.140,
  color: #FFFFFF
 },
 L3: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 32,
  lineHeight: 32 * 1.4,
  paddingTop: 32 - 32 * 0.140,
  color: #FFFFFF
 },
 L2: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 30,
  lineHeight: 30 * 1.4,
  paddingTop: 30 - 30 * 0.140,
  color: #FFFFFF
 },
 L1: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 28,
  lineHeight: 28 * 1.4,
  paddingTop: 28 - 28 * 0.140,
  color: #FFFFFF
 },
 LS: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 26,
  lineHeight: 26 * 1.4,
  paddingTop: 26 - 26 * 0.140,
  color: #FFFFFF
 },
 LXS: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 24,
  lineHeight: 24 * 1.4,
  paddingTop: 24 - 24 * 0.140,
  color: #FFFFFF
 },
 LXS1: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 22,
  lineHeight: 22 * 1.4,
  paddingTop: 22 - 22 * 0.140,
  color: #FFFFFF
 },
 LXS2: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 20,
  lineHeight: 20 * 1.155,
  paddingTop: 20 - 20 * 0.116,
  color: #FFFFFF
 },
 LXS3: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 18,
  lineHeight: 18 * 1.3,
  paddingTop: 18 - 18 * 0.130,
  color: #FFFFFF
 },
 LXS4: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 16,
  lineHeight: 16 * 1.3,
  paddingTop: 16 - 16 * 0.130,
  color: #FFFFFF
 },
 LXS5: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 14,
  lineHeight: 14 * 1.3,
  paddingTop: 14 - 14 * 0.130,
  color: #FFFFFF
 },
 LXS6: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 12,
  lineHeight: 12 * 1.3,
  paddingTop: 12 - 12 * 0.130,
  color: #FFFFFF
 },
 LXS7: {
  fontFamily: fontFamilies.ExtraLight,
  fontSize: 10,
  lineHeight: 10 * 1.3,
  paddingTop: 10 - 10 * 0.130,
  color: #FFFFFF
 }
}

export const colors = {
 ASGreys: {
  ASGreys100: "#e1e1e1",
  ASGreys200: "#b2b2b2",
  ASGreys300: "#a1a1a1",
  ASGreys400: "#939393",
  ASGreys500: "#848484",
  ASGreys600: "#686868",
  ASGreys700: "#555555",
  ASGreys800: "#454545",
  ASGreys900: "#383838",
  ASGreys1000: "#1c1c1c"
 },
 SallyRed: {
  SallyRed100: "#ffd8e0",
  SallyRed200: "#ff92a7",
  SallyRed300: "#ff738e",
  SallyRed400: "#ff5677",
  SallyRed500: "#ff254f",
  SallyRed600: "#d10029",
  SallyRed700: "#ae0022",
  SallyRed800: "#8e001c",
  SallyRed900: "#770017",
  SallyRed1000: "#42000d"
 },
 OYAOlive: {
  OYAOlive100: "#e1e3dd",
  OYAOlive200: "#b0b4a5",
  OYAOlive300: "#9ea391",
  OYAOlive400: "#919681",
  OYAOlive500: "#818770",
  OYAOlive600: "#656a58",
  OYAOlive700: "#535748",
  OYAOlive800: "#42453a",
  OYAOlive900: "#373930",
  OYAOlive1000: "#1c1d18"
 },
 OYAEarth: {
  OYAEarth100: "#efdfd8",
  OYAEarth200: "#d3aa95",
  OYAEarth300: "#c8967c",
  OYAEarth400: "#c08669",
  OYAEarth500: "#b77452",
  OYAEarth600: "#925a3d",
  OYAEarth700: "#784a32",
  OYAEarth800: "#603b28",
  OYAEarth900: "#4f3121",
  OYAEarth1000: "#281911"
 }
}
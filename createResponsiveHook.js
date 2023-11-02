import fs from "fs"

const tsContent = `
import { useWindowDimensions } from 'react-native'
import { designSystemHeight, designSystemWidth } from './StyleSheet'

export const useResponsiveStyles = () => {
  const { height, width } = useWindowDimensions()

  const scaledHeight = (value: number) => {
    const heightFactor = height / designSystemHeight
    return value * heightFactor
  }
  const scaledWidth = (value: number) => {
    const factor = width / designSystemWidth
    return value * factor
  }

  return { scaledHeight, scaledWidth, height, width }
}
`
const filePath = "./exports/useResponsiveStyles.ts";

// Write the content to the TypeScript file
fs.writeFileSync(filePath, tsContent, "utf-8");

console.log(`Created ${filePath}`);
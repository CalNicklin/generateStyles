import fs from "fs";
export const generateFontFamilies = (styles) => {
  const { fontWeights, fontFamilies } = styles;

  for (const i in fontFamilies) {
    for (const key in fontWeights) {
      if (fontWeights.hasOwnProperty(key)) {
        const fontWeight = fontWeights[key];

        if (!fontFamilies[i].hasOwnProperty(fontWeight)) {
          fontFamilies[fontWeight] = `${fontFamilies[i]}${fontWeight}`;
        }
      }
    }
  }
  // Write to file
  fs.appendFileSync(
    "./StyleSheet.js",
    `\nexport const fontFamilies = ${JSON.stringify(fontFamilies, null, 2)}`
  );
};

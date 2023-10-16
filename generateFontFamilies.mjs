export default generateFontFamiliesFromFontWeights = (fontWeights, fontFamilies) => {
  for (const key in fontWeights) {
    if (fontWeights.hasOwnProperty(key)) {
      const fontWeight = fontWeights[key];

      if (!fontFamilies.hasOwnProperty(fontWeight)) {
        fontFamilies[fontWeight] = `${fontFamilies[0]}${fontWeight}`;
      }
    }
  }
  return fontFamilies
}

generateFontFamiliesFromFontWeights(fontWeights, fontFamilies);

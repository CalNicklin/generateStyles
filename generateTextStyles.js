import fs from "fs";
export const generateTextStyles = async (fontStyles, fontFamilies) => {
  const transformedStyles = {};

  for (const key in fontStyles) {
    if (
      key === "Display" ||
      key === "Bold" ||
      key === "Regular" ||
      key === "Light"
    ) {
      for (const subKey in fontStyles[key]) {
        if (fontStyles[key].hasOwnProperty(subKey)) {
          const style = fontStyles[key][subKey];
          const fontFamily = style.fontFamily;
          const fontWeight = style.fontWeight;

          let matchedFontFamily;
          for (const key in fontFamilies) {
            if (
              fontFamilies.hasOwnProperty(key) &&
              fontFamilies[key] === `${fontFamily}${fontWeight}`
            ) {
              matchedFontFamily = `${fontFamilies[key]}`;
            }
          }

          // Perform other transformations as needed
          const fontSize = parseFloat(style.fontSize);
          const lineHeight = `${fontSize} * 0.${parseFloat(style.lineHeight)}`;
          const paddingTop = `${fontSize} - ${fontSize} * 0.${parseFloat(
            style.lineHeight
          )}`;
          const color = "#FFFFFF"; // You can replace this with your color definition

          transformedStyles[subKey] = {
            fontFamily: matchedFontFamily,
            fontSize,
            lineHeight,
            paddingTop,
            color,
          };
        }
      }
    }
  }

  // Write to file
  fs.appendFileSync(
    "./StyleSheet.ts",
    `\n\ntype TextStyles = {
      [key: string]: TextStyle
    }\n\nexport const textStyles = ${JSON.stringify(
      transformedStyles,
      null,
      1
    ).replace(/"([^"]+)":/g, '$1:')}`
  );
};

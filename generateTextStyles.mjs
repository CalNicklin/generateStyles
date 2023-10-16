import fs from "fs";
export const transformFontStyles = (fontStyles) => {
  const transformedStyles = {};

  for (const key in fontStyles) {
    if (fontStyles.hasOwnProperty(key)) {
      const style = fontStyles[key];
      const fontFamily = style.fontFamily; // Assuming this is the original fontFamily
      const fontWeight = style.fontWeight; // Assuming this is the original fontWeight
      // Map the original fontFamily and fontWeight to React Native font family
      const fontFamilyRN = `${fontFamily}${fontWeight}`;

      // Perform other transformations as needed
      const fontSize = parseFloat(style.fontSize);
      const lineHeight = `${fontSize} * 0.${parseFloat(style.lineHeight)}`;
      const paddingTop = `${fontSize} - ${fontSize} * 0.${parseFloat(
        style.lineHeight
      )}`;
      const color = "#FFFFFF"; // You can replace this with your color definition

      transformedStyles[key] = {
        fontFamily: fontFamilyRN,
        fontSize,
        lineHeight,
        paddingTop,
        color,
      };
    }
  }

  fs.appendFileSync(
    "./StyleSheet.js",
    JSON.stringify(transformedStyles, null, 2)
  ); // Write to file
};

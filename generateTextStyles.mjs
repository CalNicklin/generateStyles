import fs from "fs";
export const transformFontStyles = (fontStyles) => {
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
          // Map the original fontFamily and fontWeight to React Native compatible font family
          const fontFamilyRN = `${fontFamily}${fontWeight}`;

          // Perform other transformations as needed
          const fontSize = parseFloat(style.fontSize);
          const lineHeight = `${fontSize} * 0.${parseFloat(style.lineHeight)}`;
          const paddingTop = `${fontSize} - ${fontSize} * 0.${parseFloat(
            style.lineHeight
          )}`;
          const color = "#FFFFFF"; // You can replace this with your color definition

          transformedStyles[subKey] = {
            fontFamily: fontFamilyRN,
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
    "./StyleSheet.js",
    `\nexport const textStyles = ${JSON.stringify(transformedStyles, null, 2)}`
  );
};

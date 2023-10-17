import fs from "fs";

export const generateColors = (styles) => {
  for (const key in styles) {
    if (key === "ColorRamp") {
      const colorRamp = styles[key];
      const transformedColors = {};

      for (const subKey in colorRamp) {
        if (colorRamp.hasOwnProperty(subKey)) {
          transformedColors[subKey] = colorRamp[subKey];
        }
      }

      const trimmedColors = Object.fromEntries(
        Object.entries(transformedColors).map(([key, value]) => [key.replace(/\s/g, ''), value])
      )

      // Write to file
      fs.appendFileSync(
        "./StyleSheet.ts",
        `\n\nexport const colors = ${JSON.stringify(trimmedColors, null, 1).replace(/"([^"]+)":/g, '$1:')}`
      );
    }
  }
};

import fs from "fs";

export const generateColors = (styles) => {
  for (const key in styles) {
    if (key === "ColorRamp") {
      const colorRamp = styles[key];
      let transformedColors = {};

      for (const subKey in colorRamp) {
        if (colorRamp.hasOwnProperty(subKey)) {
          transformedColors[subKey] = colorRamp[subKey];
        }
      }

      for (const key in transformedColors) {
        transformedColors[key] = Object.fromEntries(
          Object.entries(transformedColors[key]).map(([key, value]) => [
            key.replace(/\s/g, ""),
            value,
          ])
        );
      }

      transformedColors = Object.fromEntries(
        Object.entries(transformedColors).map(([key, value]) => [
          key.replace(/\s/g, ""),
          value,
        ])
      );

      // Write to file
      fs.appendFileSync(
        "./exports/StyleSheet.ts",
        `\n\nexport const colors = ${JSON.stringify(
          transformedColors,
          null,
          1
        ).replace(/"([^"]+)":/g, "$1:")}`
      );
    }
  }
};

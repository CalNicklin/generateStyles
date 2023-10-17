import { generateFontFamilies } from "./generateFontFamilies.js";
import { generateTextStyles } from "./generateTextStyles.js";
import { generateColors } from "./generateColors.js";
import output from "./output.json" assert { type: "json" };

const generation = async () => {
  await generateFontFamilies(output).then(async (fontFamilies) => {
    await generateTextStyles(output, fontFamilies).then(() => {
      generateColors(output);
    });
  });
};

generation();

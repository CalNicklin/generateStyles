const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
registerTransforms(StyleDictionary);

// example value transform, which just returns the token as is
StyleDictionary.registerTransform({
  type: 'value',
  name: 'myCustomTransform',
  matcher: (token) => {},
  transformer: (token) => {
    return token; // <-- transform as needed
  },
});

// format helpers from style-dictionary
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

// example css format
StyleDictionary.registerFormat({
  name: 'myCustomFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;
    return `${fileHeader({ file })}:root {
${formattedVariables({ format: 'css', dictionary, outputReferences })}
}`;
  },
});

const sd = StyleDictionary.extend({
  source: ['style.json'],
  platforms: {
    js: {
      buildPath: './',
      transformGroup: 'react-native',
      files: [
        {
          destination: 'output.js',
          format: 'json/nested',
        },
      ],
    },
  },
});
sd.cleanAllPlatforms(); // optionally, cleanup files first..
sd.buildAllPlatforms();

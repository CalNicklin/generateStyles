# generateStyles.sh

This bash script will generate a ReactNative-ready StyleSheet and useResponsiveStyles hook file from a raw exported Figma JSON file.

## Requirements

Node >=v16

Assumes that Figma exported file uses the following keys:
- "Display"
- "Bold"
- "Regular" 
- "Light"
- "ColorRamp"

See `style.json` for an example file structure.

## Usage

1. Export your Figma file as JSON, ideally using the Tokens Studio plugin.
2. Place the JSON file renamed as `style.json` in the root of this project.
3. From this directory, run `./generateStyles.sh`
4. `StyleSheet.ts` and `useResponsiveStyles.ts` will be generated in the `/export` dir of this project.

## Take note!

The text `lineheight` and `paddingTop` values are a *starting point* and should be tweaked to ideal, because this is dependent on font family.

## Under the hood

The script will run the following steps:

_Format Figma export into the required JSON format_
`node build-output.js` - build-output uses the tokens studio 'Style Dictionary' plugin to export a JSON file with the correct format for this script to work. Style Dictionary is a tool that allows you to define style once, and generate multiple outputs from it. In this case, we're using it to generate a JSON file that we can use to generate a ReactNative stylesheet.

_Generate basic stylesheet file with pre-populated funcs_
`node createStyleSheet.js` - createStyleSheet will generate a templated stylesheet file with pre-populated functions for that are always used in our RN projects i.e. responsive spacing, scaling. This is a starting point.


_Populate stylesheet with consts_
`node generateStyleSheet.js` - generateStyleSheet will populate the StyleSheet with consts from the JSON file. This is the main part of the script.

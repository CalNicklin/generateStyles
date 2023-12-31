#!/bin/bash

# Format Figma export into the required JSON format
node build-output.js
echo "Formatted Figma export into the required JSON format"

# Generate basic stylesheet file with pre-populated funcs
node createStyleSheet.js
node createResponsiveHook.js

# Populate stylesheet with consts
node generateStyleSheet.js 
echo "Populated stylesheet with consts"


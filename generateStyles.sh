#!/bin/bash

# Format Figma export into the required JSON format
node build-output.js

# Extract the JSON object from the file
json_file=output.js
json=$(cat "$json_file")

# Name of the output file
output_file="styles.ts"

# Clear the existing content of the output file
> "$output_file"

# Iterate through the keys and write individual const statements to the output file
for key in $(echo "$json" | jq -r 'keys[]'); do
  value=$(echo "$json" | jq --arg key "$key" '.[$key]')
  echo "export const $key = $value;" >> "$output_file"
done

echo "Exported consts to $output_file"


# Generate basic stylesheet file with pre-populated funcs
node createStyleSheet.ts
echo "Created stylesheet file with pre-populated funcs"

# Run 


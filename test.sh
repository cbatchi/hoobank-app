#!/bin/bash

# Set the directory path
directory="./src/components"

# List all file names in the directory
file_names=$(ls "$directory")

# Print each file name
for file_name in $file_names; do
    echo "$file_name"
done
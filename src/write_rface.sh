#!/bin/bash

# Set the directory path
directory="./components"

# Check if the reverse arrow option is enabled
reverse_arrow=false

# Parse command-line options
while getopts "r" opt; do
    case $opt in
        r)
            reverse_arrow=true
            ;;
        \?)
            echo "Invalid option: -$OPTARG" >&2
            exit 1
            ;;
    esac
done

# Iterate over each file in the directory
for file in "$directory"/*; do
    # Check if the file is a regular file
    if [ -f "$file" ]; then
        # Write "rface" to the file
        echo "rafce" > "$file"
        echo "Successfully wrote 'rface' to $file"

        # Activate reverse arrow key if enabled
        if $reverse_arrow; then
            tput rev
        fi
    fi
done

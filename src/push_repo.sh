#!/bin/bash

# Set the repository path
repository_path="/path/to/repository"

# Set the GitHub username and repository name
github_username="cbatchi"
github_repository="your_repository"

# Change directory to the repository path
cd "$repository_path" || exit

# Initialize the repository (if not already initialized)
git init

# Add all files to the repository
git add .

# Commit the changes
git commit -m "Initial commit"

# Add the GitHub remote repository
git remote add origin "https://github.com/$github_username/$github_repository.git"

# Push the changes to GitHub
git push -u origin master




git remote -l ${demo.repository->debt}
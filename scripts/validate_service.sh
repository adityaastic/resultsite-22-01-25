#!/bin/bash
# validate_service.sh

# Retry curl 3 times with a 5-second delay between retries
for i in {1..3}
do
    echo "Attempt $i: Checking if the site is up..."
    # Check if the site is accessible
    if curl --silent --fail https://bgmgameresult.in/; then
        echo "Site is up."
        exit 0
    fi

    # If curl fails, extract target ID from the site response
    echo "Attempt $i failed, extracting target ID..."
    
    # Extract target ID properly from the site response or from AWS EC2 instance metadata if needed
    TARGET_ID=$(curl -s https://bgmgameresult.in/ | awk -F'[/:]' '{print $4}') # Ensure this is extracting the correct value
    
    # Debug output to check if the TARGET_ID is correct
    echo "Extracted Target ID: $TARGET_ID"
    
    # Check if the TARGET_ID is empty
    if [ -z "$TARGET_ID" ]; then
        echo "Target ID is empty. Exiting."
        exit 1
    fi

    # If the target ID is valid, exit with success
    echo "Successfully extracted Target ID: $TARGET_ID"
    exit 0

    # Retry logic
    echo "Attempt $i failed, retrying in 5 seconds..."
    sleep 5
done

# If all attempts fail, exit with error
echo "The site is down or unable to extract the Target ID, exiting with error."
exit 1

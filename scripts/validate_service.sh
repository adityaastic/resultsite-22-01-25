#!/bin/bash
# validate_service.sh

# Retry curl 3 times with a 5-second delay between retries
for i in {1..3}
do
    echo "Attempt $i: Checking if the site is up..."
    curl --silent --fail https://bgmgameresult.in/ && exit 0
    echo "Attempt $i failed, retrying in 5 seconds..."
    sleep 5
done

# If all attempts fail, exit with error
echo "The site is down, exiting with error."
exit 1
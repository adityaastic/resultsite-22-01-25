#!/bin/bash
# validate_service.sh

# Target Group ARN (using the ARN you provided)
TARGET_GROUP_ARN="arn:aws:elasticloadbalancing:ap-south-1:211125441224:targetgroup/bgmgameresult/81a4b3e76d0eba2f"

# Retry curl 3 times with a 5-second delay between retries
for i in {1..3}
do
    echo "Attempt $i: Checking if the site is up..."
    # Check if the site is accessible
    if curl --silent --fail https://bgmgameresult.in/; then
        echo "Site is up."
        exit 0
    fi

    # If curl fails, check if the instance is healthy in the target group
    echo "Attempt $i failed, checking target group health..."
    TARGET_HEALTH=$(aws elbv2 describe-target-health --target-group-arn $TARGET_GROUP_ARN \
                    --query "TargetHealthDescriptions[?Target.Id=='$(curl -s https://bgmgameresult.in/ | awk -F'[/:]' '{print $4}')]].TargetHealth.State" \
                    --output text)

    # Check if the target health is 'healthy'
    if [[ "$TARGET_HEALTH" == "healthy" ]]; then
        echo "EC2 instance is healthy in target group."
    else
        echo "EC2 instance is not healthy in target group."
        exit 1
    fi

    # Retry logic
    echo "Attempt $i failed, retrying in 5 seconds..."
    sleep 5
done

# If all attempts fail, exit with error
echo "The site is down or EC2 instance is unhealthy, exiting with error."
exit 1

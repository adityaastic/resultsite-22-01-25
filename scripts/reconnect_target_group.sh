#!/bin/bash

# Target Group ARN and Instance ID
TARGET_GROUP_ARN="arn:aws:elasticloadbalancing:ap-south-1:211125441224:targetgroup/bgmgameresult/81a4b3e76d0eba2f"
INSTANCE_ID="i-06c65f6520f5247f4"

# Function to check if instance is healthy
check_instance_health() {
    TARGET_HEALTH=$(aws elbv2 describe-target-health --target-group-arn $TARGET_GROUP_ARN \
        --query "TargetHealthDescriptions[?Target.Id=='$INSTANCE_ID'].TargetHealth.State" \
        --output text)

    echo "Current Target Health: $TARGET_HEALTH"

    if [[ "$TARGET_HEALTH" == "healthy" ]]; then
        return 0  # Healthy
    else
        return 1  # Not healthy
    fi
}

# Register the instance only once
echo "Registering instance $INSTANCE_ID to the target group..."
aws elbv2 register-targets --target-group-arn $TARGET_GROUP_ARN --targets Id=$INSTANCE_ID

# Maximum number of health check attempts
MAX_ATTEMPTS=20  # Adjust as needed
ATTEMPT=1

# Continuously check the health of the instance until it becomes healthy or max attempts reached
while [[ $ATTEMPT -le $MAX_ATTEMPTS ]]; do
    echo "Attempt $ATTEMPT: Checking if the instance is healthy..."

    # Check the health of the instance
    check_instance_health

    if [[ $? -eq 0 ]]; then
        echo "✅ Instance $INSTANCE_ID is healthy in the target group."
        exit 0
    else
        echo "❌ Instance $INSTANCE_ID is not healthy. Waiting for the next check..."
        
        # Wait before checking again (adjust the interval as needed)
        sleep 30
    fi

    # Increment attempt counter
    ((ATTEMPT++))
done

echo "❌ Instance did not become healthy after $MAX_ATTEMPTS attempts."
exit 1  # Failing the script if the instance is not healthy after max attempts

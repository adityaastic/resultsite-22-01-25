#!/bin/bash

# Target Group ARN
TARGET_GROUP_ARN="arn:aws:elasticloadbalancing:ap-south-1:211125441224:targetgroup/bgmgameresult/81a4b3e76d0eba2f"
INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)

# Check if the instance is already registered with the target group
TARGET_HEALTH=$(aws elbv2 describe-target-health --target-group-arn $TARGET_GROUP_ARN \
                --query "TargetHealthDescriptions[?Target.Id=='$INSTANCE_ID']" \
                --output text)

# If not healthy or not registered, register the instance again
if [[ "$TARGET_HEALTH" != "healthy" ]]; then
    echo "Re-registering instance $INSTANCE_ID with target group..."
    aws elbv2 register-targets --target-group-arn $TARGET_GROUP_ARN --targets Id=$INSTANCE_ID
else
    echo "Instance $INSTANCE_ID is already healthy in the target group."
fi

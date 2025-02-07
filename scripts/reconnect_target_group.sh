# #!/bin/bash

# # Target Group ARN and Instance ID
# TARGET_GROUP_ARN="arn:aws:elasticloadbalancing:ap-south-1:211125441224:targetgroup/bgmgameresult/81a4b3e76d0eba2f"
# INSTANCE_ID="i-0066fff0900856a5b"
# # INSTANCE_ID="i-06c65f6520f5247f4"

# # Function to check if instance is healthy
# check_instance_health() {
#     TARGET_HEALTH=$(aws elbv2 describe-target-health --target-group-arn $TARGET_GROUP_ARN \
#                 --query "TargetHealthDescriptions[?Target.Id=='$INSTANCE_ID'].TargetHealth.State" \
#                 --output text)

#     echo "Current Target Health: $TARGET_HEALTH"
#     if [[ "$TARGET_HEALTH" == "healthy" ]]; then
#         return 0  # Healthy
#     else
#         return 1  # Not healthy
#     fi
# }

# # Max attempts to check the health
# MAX_ATTEMPTS=5
# ATTEMPT=0

# # Continuously check the health until the instance becomes healthy or max attempts are reached
# while [[ $ATTEMPT -lt $MAX_ATTEMPTS ]]
# do
#     ((ATTEMPT++))
#     echo "Attempt $ATTEMPT: Checking if the site is up..."

#     # Check the health of the instance
#     check_instance_health

#     if [[ $? -eq 0 ]]; then
#         echo "Instance $INSTANCE_ID is healthy in the target group."
#         exit 0
#     else
#         # Re-register the instance if it's not healthy
#         echo "Instance $INSTANCE_ID is not healthy. Re-registering..."
#         aws elbv2 register-targets --target-group-arn $TARGET_GROUP_ARN --targets Id=$INSTANCE_ID
        
#         # Wait before the next health check
#         sleep 20  # wait for 20 seconds before checking again
#     fi
# done

# echo "Instance $INSTANCE_ID is not healthy after $MAX_ATTEMPTS attempts."
# exit 1

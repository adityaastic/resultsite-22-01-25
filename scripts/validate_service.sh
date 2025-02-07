# #!/bin/bash
# # validate_service.sh

# # Target Group ARN
# TARGET_GROUP_ARN="arn:aws:elasticloadbalancing:ap-south-1:211125441224:targetgroup/bgmgameresult/81a4b3e76d0eba2f"

# # EC2 Instance ID (Replace with actual instance ID)
# # INSTANCE_ID="i-06c65f6520f5247f4"
# INSTANCE_ID="i-0066fff0900856a5b"

# # Retry curl 3 times with a 5-second delay between retries
# for i in {1..3}
# do
#     echo "Attempt $i: Checking if the site is up..."
    
#     # Check if the site is accessible
#     if curl --silent --fail https://bgmgameresult.in/; then
#         echo "Site is up."
#         exit 0
#     fi

#     # If curl fails, check if the instance is healthy in the target group
#     echo "Attempt $i failed, checking target group health..."
    
#     TARGET_HEALTH=$(aws elbv2 describe-target-health --target-group-arn $TARGET_GROUP_ARN \
#                     --query "TargetHealthDescriptions[?Target.Id=='$INSTANCE_ID'].TargetHealth.State" \
#                     --output text)

#     echo "Current Target Health: $TARGET_HEALTH"

#     # Check if the target health is 'healthy'
#     if [[ "$TARGET_HEALTH" == "healthy" ]]; then
#         echo "EC2 instance is healthy in target group."
#         exit 0
#     else
#         echo "EC2 instance is not healthy in target group."
#         exit 1
#     fi

#     # Retry logic
#     echo "Retrying in 5 seconds..."
#     sleep 5
# done

# # If all attempts fail, exit with error
# echo "The site is down or EC2 instance is unhealthy, exiting with error."
# exit 1

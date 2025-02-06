# # #!/bin/bash
# # # start_application.sh

# # # Start your Docker containers if needed or any other necessary services
# # docker-compose start
# #!/bin/bash

# # Navigate to project directory
# cd /home/ec2-user/resultsite-22-01-25 || { echo "Failed to change directory"; exit 1; }

# # Ensure Docker is running
# sudo systemctl start docker

# # Check if docker-compose.yml exists
# if [[ ! -f "docker-compose.yml" ]]; then
#     echo "Error: docker-compose.yml not found in $(pwd)"
#     exit 1
# fi

# # Check if containers are already running
# if [[ $(docker ps -q) ]]; then
#     echo "Containers are already running."
# else
#     echo "Starting Docker containers..."
#     docker-compose up || { echo "Failed to start containers"; exit 1; }
# fi

# # Verify running containers
# docker ps

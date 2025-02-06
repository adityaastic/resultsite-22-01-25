# # # #!/bin/bash
# # # # docker_up.sh

# # # cd /home/ec2-user/resultsite-22-01-25
# # # docker-compose up --build -d
# # #!/bin/bash
# # # start_application.sh

# # cd /home/ec2-user/resultsite-22-01-25 || { echo "Failed to change directory"; exit 1; }

# # # Check if required config files exist
# # if [[ ! -f "docker-compose.yml" ]]; then
# #     echo "Error: docker-compose.yml not found in $(pwd)"
# #     exit 1
# # fi

# # # Ensure Docker is running
# # docker rm -f $(docker ps -aq) || { echo "Failed to remove containers"; exit 1; }
# # docker system prune -a --volumes -f || { echo "Failed to prune Docker system"; exit 1; }
# # sudo systemctl start docker

# # # Restart application containers
# # docker-compose up --build -d || { echo "Docker Compose failed"; exit 1; }

# # # Verify running containers
# # docker ps
# #!/bin/bash
# # start_application.sh

# cd /home/ec2-user/resultsite-22-01-25 || { echo "Failed to change directory"; exit 1; }

# # Check if required config files exist
# if [[ ! -f "docker-compose.yml" ]]; then
#     echo "Error: docker-compose.yml not found in $(pwd)"
#     exit 1
# fi

# # Remove all containers only if they exist
# containers=$(docker ps -aq)
# if [[ -n "$containers" ]]; then
#     docker rm -f $containers || { echo "Failed to remove containers"; exit 1; }
# else
#     echo "No containers to remove."
# fi

# # Clean up unused Docker resources
# docker system prune -a --volumes -f || { echo "Failed to prune Docker system"; exit 1; }



# # Restart application containers
# docker-compose up --build -d || { echo "Docker Compose failed"; exit 1; }

# # Verify running containers
# docker ps

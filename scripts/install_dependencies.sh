# #!/bin/bash
# # install_dependencies.sh

# # Update system packages
# sudo yum update -y

# # Enable and install Docker
# sudo amazon-linux-extras enable docker
# sudo yum install -y docker
# sudo systemctl start docker
# sudo systemctl enable docker
# sudo usermod -aG docker ec2-user

# # Restart session to apply group changes
# newgrp docker

# # Install the latest Docker Compose
# DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -oP '"tag_name": "\K(.*)(?=")')
# sudo curl -L "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# sudo chmod +x /usr/local/bin/docker-compose
# sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# # Verify installation
# sudo amazon-linux-extras enable nginx1
# sudo yum install -y nginx

# docker --version
# docker-compose --version
# nginx -v
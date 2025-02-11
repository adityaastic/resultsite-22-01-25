FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . ./dist

# Install serve globally to serve the app
RUN npm install -g serve

# Expose port 8000
EXPOSE 8000

# Command to serve the app
CMD ["serve", "-s", "dist", "-l", "8000"]

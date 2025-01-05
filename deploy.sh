#!/bin/bash

# ECR repository details
AWS_ACCOUNT="370406301147"
AWS_REGION="us-east-2"
ECR_REPO="rca-sk-website"
CONTAINER_NAME="rca-sk-website"

# Login to AWS ECR
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com

# Stop and remove existing container if it exists
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping existing container..."
    docker stop $CONTAINER_NAME
fi
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Removing existing container..."
    docker rm $CONTAINER_NAME
fi

# Pull the latest image
echo "Pulling latest image..."
docker pull $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:latest

# Run the new container
echo "Starting new container..."
docker run -d \
    --name $CONTAINER_NAME \
    -p 5000:5000 \
    -v $(pwd)/build:/app/build \
    --restart unless-stopped \
    $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO:latest

echo "Deployment completed successfully!" 
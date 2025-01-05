#!/bin/bash

# Variables
AWS_REGION="ap-northeast-2"  # Seoul region
ECR_REPOSITORY="rwanda-korea-community"
CLUSTER_NAME="rwanda-korea-cluster"
SERVICE_NAME="rwanda-korea-service"

# Build the Docker image
docker build -t $ECR_REPOSITORY .

# Login to ECR
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Tag and push the image
docker tag $ECR_REPOSITORY:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest

# Update the ECS service
aws ecs update-service \
  --cluster $CLUSTER_NAME \
  --service $SERVICE_NAME \
  --force-new-deployment \
  --region $AWS_REGION 
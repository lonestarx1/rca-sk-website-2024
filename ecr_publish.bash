# Login to AWS ECR
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 370406301147.dkr.ecr.us-east-2.amazonaws.com

# Get current timestamp for version tag
VERSION=$(date +%Y%m%d_%H%M%S)

# Build the Docker image
docker build -t rca-sk-website .

# Tag with version and latest
docker tag rca-sk-website:latest 370406301147.dkr.ecr.us-east-2.amazonaws.com/rca-sk-website:$VERSION
docker tag rca-sk-website:latest 370406301147.dkr.ecr.us-east-2.amazonaws.com/rca-sk-website:latest

# Push both tags to ECR
docker push 370406301147.dkr.ecr.us-east-2.amazonaws.com/rca-sk-website:$VERSION
docker push 370406301147.dkr.ecr.us-east-2.amazonaws.com/rca-sk-website:latest
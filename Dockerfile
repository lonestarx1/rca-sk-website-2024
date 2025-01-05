FROM node:18-alpine

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies with legacy peer deps to avoid conflicts
RUN npm install --legacy-peer-deps

# Build the app
RUN npm run build

# Set environment variables
ENV NODE_ENV=production \
    PORT=5001

CMD ["npm", "start"]

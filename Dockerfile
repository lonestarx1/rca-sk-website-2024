FROM node:18-alpine

WORKDIR /app

# Copy everything
COPY . .

# Install dependencies with legacy peer deps to avoid conflicts
RUN npm install --legacy-peer-deps

# Build the app
RUN npm run build

# Add curl for healthcheck
RUN apk --no-cache add curl

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5001/api/health || exit 1

# Set environment variables
ENV NODE_ENV=production \
    PORT=5001

EXPOSE 5001

CMD ["npm", "start"]
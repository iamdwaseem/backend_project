# Use official lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining application code
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the application
CMD ["npm", "start"]

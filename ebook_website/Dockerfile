# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which your React app will run
EXPOSE 3000

# Set environment variables (optional)
# ENV NODE_ENV=production

# Command to run the React app
CMD ["npm", "start"]


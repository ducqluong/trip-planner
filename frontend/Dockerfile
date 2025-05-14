# Stage 1: Build the React application
# Use a recent Node.js image as the base for building
FROM node:20-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
# This allows Docker to cache the dependencies layer
COPY package*.json ./

# Install dependencies
# Using --frozen-lockfile ensures that the exact versions from package-lock.json are installed
RUN npm install --frozen-lockfile

# Copy the rest of the frontend code
COPY . .

# Build the React application for production
# This command runs the build script defined in your package.json
RUN npm run build

# Stage 2: Serve the built application using Nginx
# Use a lightweight Nginx image as the base for serving
FROM nginx:alpine

# Copy the built application files from the builder stage to the Nginx web root
# The build output is typically in the 'dist' directory for Vite projects
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file (optional but recommended)
# This allows you to configure Nginx for your specific needs, like routing
# We'll create a simple default.conf below
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx will listen on (default is 80)
EXPOSE 80

# Command to start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]


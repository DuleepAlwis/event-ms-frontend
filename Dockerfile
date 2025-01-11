# Stage 1: Build the Angular application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Stage 2: Serve the application with Nginx
FROM nginx:1.25

# Copy the built Angular files to Nginx's default html directory
COPY --from=build /app/dist/eventure-fe /usr/share/nginx/html

# Copy custom Nginx configuration if needed
# Uncomment the next line if you have a custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

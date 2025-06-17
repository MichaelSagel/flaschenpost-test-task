# Stage 1: Build frontend with Node.js
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve using NGINX
FROM nginx:alpine

# Copy production build to NGINX directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the React frontend
FROM node:20 AS frontend-build
WORKDIR /app/frontend

# Copy only package files first to leverage Docker cache
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the rest of the frontend files and build
COPY frontend/ ./
RUN npm run build

# Stage 2: Setup and run the backend
FROM node:20 AS backend
WORKDIR /app/backend

# Copy only package files first
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Copy backend code
COPY backend/ ./

# Expose backend API port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]

# Stage 3: Serve frontend using Nginx
FROM nginx:alpine AS frontend
COPY --from=frontend-build /app/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

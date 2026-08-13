FROM node:20-alpine

# Install FFmpeg required for audio processing
RUN apk add --no-cache ffmpeg

WORKDIR /app

# Copy workspaces configuration
COPY package*.json ./

# Copy package.json of both apps
COPY web-app/package*.json ./web-app/
COPY web-backend/package*.json ./web-backend/

# Install dependencies (using npm workspaces if defined, or individually)
RUN npm install
RUN cd web-app && npm install
RUN cd web-backend && npm install

# Copy all source code
COPY . .

# Build the frontend web-app
RUN cd web-app && npm run build

# Build the backend
RUN cd web-backend && npm run build

EXPOSE 3000

# Start the backend server (which serves the frontend automatically)
CMD ["npm", "run", "start", "--workspace=@mp3-editor/web-backend"]

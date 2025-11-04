FROM node:20-alpine
WORKDIR /calendar/server
COPY package*.json .
RUN npm install --no-cache-dir
COPY . .
EXPOSE 5000
CMD ["npx", "nodemon", "server.js"]
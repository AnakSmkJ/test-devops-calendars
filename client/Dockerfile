FROM node:22.16.0
WORKDIR /calendar/client
COPY package*.json .
RUN npm install --no-cache-dir
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
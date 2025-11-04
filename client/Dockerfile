FROM node:20-alpine
WORKDIR /calendar/client
COPY package*.json .
RUN npm install --no-cache-dir
COPY . .

ARG REACT_API_URL
ENV REACT_API_URL=$REACT_API_URL

RUN npm run build

EXPOSE 3000
CMD ["npm", "run" , "preview"]
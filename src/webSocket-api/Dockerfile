FROM node:latest
EXPOSE 5000
WORKDIR /src/websocket
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "npm", "start" ]
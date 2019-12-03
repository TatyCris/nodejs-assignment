FROM node:latest
EXPOSE 4000
WORKDIR /src/stream
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "npm", "start" ]
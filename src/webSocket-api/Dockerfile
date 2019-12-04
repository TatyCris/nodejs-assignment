FROM node:latest
EXPOSE 5000
WORKDIR /src/websocket
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm ci
COPY . .
CMD [ "npm", "start" ]
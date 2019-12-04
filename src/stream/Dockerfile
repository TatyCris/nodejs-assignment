FROM node:latest
EXPOSE 4000
WORKDIR /src/stream
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm ci
COPY . .
CMD [ "npm", "start" ]
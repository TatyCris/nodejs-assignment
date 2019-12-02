FROM node:latest
EXPOSE 3000
WORKDIR /src/rest-api
COPY package*.json ./
RUN npm ci
COPY . .
CMD [ "npm", "start" ]

# https://dev.to/alex_barashkov/using-docker-for-nodejs-in-development-and-production-3cgp
# https://medium.com/better-programming/dockerizing-multiple-services-inside-a-single-container-96cdff286cef
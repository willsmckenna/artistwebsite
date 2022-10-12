FROM node:14 as base

WORKDIR /usr/src/app

EXPOSE 1234

COPY . . 

RUN npm install

ENTRYPOINT node app.js
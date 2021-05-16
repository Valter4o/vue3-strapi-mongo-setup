FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN [ "/bin/bash", "-c", "npm i && mv node_modules ../"]

ENV PATH /usr/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

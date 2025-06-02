FROM node:18-alpine as dependencies
WORKDIR /client
COPY package.json package-lock.json  ./
RUN npm i

FROM node:18-alpine as builder
WORKDIR /client
COPY . .
COPY --from=dependencies /client/node_modules ./node_modules
RUN npm start

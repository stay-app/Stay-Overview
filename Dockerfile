FROM node:alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --production

EXPOSE 5004

CMD [ "npm", "start" ]
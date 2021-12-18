FROM node:12

LABEL maintainer="Lucas Machado <lucascezarmachado@gmail.com>"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]

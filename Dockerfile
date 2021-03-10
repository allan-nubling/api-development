FROM node:14.16.0

WORKDIR /home/node/app

ADD . .

ENV NODE_ENV=production

RUN npm ci

USER node

EXPOSE $PORT

CMD [ "node", "build/server.js" ]
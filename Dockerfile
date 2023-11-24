FROM node:21-alpine

LABEL maintainer="mruiz812@correo.ugr.es" \
      version="5.0.0"

WORKDIR /app/test

RUN chown -R node:node /app

COPY package.json package-lock.json ./

USER node

RUN npm ci

ENTRYPOINT ["npm", "run", "test"]
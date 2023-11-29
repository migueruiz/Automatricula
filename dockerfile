FROM node:21-alpine

LABEL maintainer="mruiz812@correo.ugr.es" \
      version="5.0.2"

RUN mkdir /.npm && chmod 777 /.npm

RUN mkdir -p /app/test && chown -R node:node /app

USER node

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

RUN rm -f package.json package-lock.json

WORKDIR /app/test

ENTRYPOINT ["npm", "run", "test"]
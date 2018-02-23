FROM strapi/strapi

ADD . /app

WORKDIR /app

RUN npm install

RUN apk update && apk add git

EXPOSE 1337

CMD strapi start

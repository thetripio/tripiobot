
FROM strapi/strapi

ADD . /app

WORKDIR /app

RUN apk update && apk add git

RUN npm install

EXPOSE 1337

CMD strapi start

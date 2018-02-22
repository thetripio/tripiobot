FROM strapi/strapi

ADD . /app

WORKDIR /app

RUN npm install

EXPOSE 1337

CMD strapi start

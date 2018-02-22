FROM strapi/strapi

ADD . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD strapi start

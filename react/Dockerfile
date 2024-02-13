FROM node:21-alpine3.18

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json .

# RUN npm ci should be the case when there already exists a package-lock.json file 

USER root

RUN chown -R app:app /app

USER app

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev

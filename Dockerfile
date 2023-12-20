FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm i 

EXPOSE 5000

CMD [ "node","index.js" ]

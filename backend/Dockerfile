FROM node:alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8000

CMD ["yarn", "start"]

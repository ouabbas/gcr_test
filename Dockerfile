FROM node:14.15.4-alpine
WORKDIR /app

COPY package.json .
RUN npm install --only=production

COPY . .

CMD [ "npm", "start" ]

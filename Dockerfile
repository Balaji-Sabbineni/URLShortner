FROM node:alpine

WORKDIR /user/url-app

COPY package*.json .

RUN npm ci

COPY . .

# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]

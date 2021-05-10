FROM node:alpine
RUN npm install -g npm@7.12.0
RUN yarn install
CMD ["yarn", "start"]
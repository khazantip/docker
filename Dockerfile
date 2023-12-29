FROM node:latest
COPY . /app
WORKDIR /app
RUN npm ci 
RUN npm run start
EXPOSE 3000
CMD ["npm", "run", "start"]
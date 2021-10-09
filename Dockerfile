FROM node:latest

WORKDIR /app
RUN sh -c "$(curl -sSfL https://release.solana.com/v1.8.0/install)"
COPY package.json . 
COPY package-lock.json .
COPY . .
RUN npm ci --silent

EXPOSE 3000
EXPOSE 80
EXPOSE 8080
EXPOSE 443
CMD ["npm", "start"]
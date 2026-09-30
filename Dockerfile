FROM node:22-alpine
WORKDIR /app
COPY app.js package.json ./
CMD ["node", "app.js"]

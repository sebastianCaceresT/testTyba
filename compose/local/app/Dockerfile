FROM node
COPY ["package.json","package-lock.json","/usr/src/"]
WORKDIR /usr/src
RUN npm install
COPY [".","/usr/src"]
EXPOSE 4000
CMD ["npx","nodemon","src/index.js"]

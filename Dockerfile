FROM node

RUN mkdir -p /usr/src/mamaduao
WORKDIR /usr/src/mamaduao

COPY . .

RUN npm i
# RUN npm run build
# RUN npm run preview
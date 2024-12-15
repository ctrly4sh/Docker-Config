FROM ubuntu
RUN apt-get update
RUN apt-get install -y curl
RUN curk -sl https://dev.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY server.js server.js

RUN yarn install

ENTRYPOINT [ "node" , "server.js" ]

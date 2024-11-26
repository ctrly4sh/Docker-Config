FROM ubuntu

RUN apt-get update
RUN apt-get instlal -y curl
RUN curk -sl https://dev.nodes
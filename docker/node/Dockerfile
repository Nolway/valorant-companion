FROM node:20-alpine as development

ARG USER_ID=1000

WORKDIR /home/node/app
# Simple hack to match host uid with docker uid, this will help us fix folder permission issue
RUN if [ ${USER_ID:-0} -ne 0 ]; then \
        deluser --remove-home node && \
        adduser -D -u ${USER_ID} node \
    ;fi

USER node
EXPOSE 3000

# typescript build
FROM node:20-alpine as builder

WORKDIR /home/node/app

COPY yarn.lock package.json ./

RUN yarn install --network-timeout 1000000

COPY . .

RUN yarn run build

# final production image
FROM node:20-alpine
WORKDIR /home/node/app

COPY --from=builder /home/node/app/dist /home/node/app/dist
COPY --from=builder /home/node/app/node_modules /home/node/app/node_modules

CMD [ "node", "dist/main.js" ]

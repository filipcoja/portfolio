FROM node:22 AS builder
WORKDIR /app
COPY ["./", "./"]

RUN corepack enable
RUN yarn install --immutable --inline-builds
RUN yarn build

# ======================================================================================= #

FROM nginx:alpine AS base
WORKDIR /app
EXPOSE 80/tcp

#ENTRYPOINT ["/etc/entrypoint.sh"]
#COPY ./entrypoint.sh /etc/entrypoint.sh
#RUN chmod +x /etc/entrypoint.sh

#RUN adduser -D -h /home/web -u 1003 web && adduser web web && chown -R 1003:1003 /app
#USER 1003:1003

COPY --from=builder --chown=1003:1003 ["/app/dist", "/usr/share/nginx/html"]


FROM docker.io/golang:alpine as bundler
RUN apk add --no-cache npm make hugo git

WORKDIR /website
COPY . /website

RUN <<EOF
#!/usr/bin/env sh
hugo --environment="production" --minify
EOF

FROM docker.io/lipanski/docker-static-website:2.6.0
COPY --from=bundler /website/public .

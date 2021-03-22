FROM alpine:latest
RUN apk update
RUN apk add --no-cache curl bash bash-completion nodejs yarn
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn global add @vue/cli vuex
RUN yarn global list
WORKDIR /app
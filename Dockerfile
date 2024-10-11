FROM nginx:alpine
COPY ./dist/comments.ui /usr/share/nginx/html
EXPOSE 80
# set the base image 
FROM node:latest 

# crate a user with permissions to run the app 
# -S -> creates a system user (daemon)
# -G -> add the user to a group 
# this is to avoid running the app as root 
RUN addgroup app && adduser -S -G app app

# set the user to run the app
USER app

WORKDIR /usr/share/app

COPY package*.json .

USER root

RUN chown -R app:app .

USER app

RUN npm ci 

COPY . .

ENV PORT=7777

EXPOSE ${PORT}

CMD npm run build && npm run preview


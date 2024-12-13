# Use the official Node.js image as the base image
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
# Install dependencies
RUN npm install
COPY . .
EXPOSE 6006

# Add Traefik labels
LABEL traefik.enable="true" \
      traefik.http.routers.erp-front-storybook.rule="Host(`erpsb.sudovi.me`)" \
      traefik.http.services.erp-front-storybook.loadbalancer.server.port="6006" \
      traefik.http.routers.erp-front-storybook.entrypoints="websecure" \
      traefik.http.routers.erp-front-storybook.tls=true

CMD ["npm", "run", "storybook:dev"]



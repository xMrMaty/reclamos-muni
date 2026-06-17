# Etapa 1: Construcción (Build)
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor Web (Nginx)
FROM nginx:alpine
# Copia los archivos compilados (Vite usa la carpeta 'dist')
COPY --from=build /app/dist /usr/share/nginx/html
# Expone el puerto 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
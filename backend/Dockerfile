# Usa la imagen oficial de Node.js
FROM node:18-alpine
# Crea el directorio de trabajo
WORKDIR /app
# Copia los archivos de dependencias
COPY package*.json ./
# Instala las dependencias
RUN npm install
# Copia el resto del código
COPY . .
# Expone el puerto del backend
EXPOSE 3001
# Comando para iniciar la aplicación
CMD ["node", "index.js"]
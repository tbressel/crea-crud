# Using a Node.js base image
FROM node:18

# path where the container will work
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install of the dependencies
RUN npm install

# Copying the rest of the files
COPY . .

# Where the application will be exposed
EXPOSE 3000

# restart the application
CMD [ "npm", "start" ]






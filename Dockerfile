FROM node:carbon-alpine

# Install dependencies
WORKDIR /usr/src/app

# Expose the app port
EXPOSE 4000

# Start the app
CMD ["npm", "start"]
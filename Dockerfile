FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json yarn.lock ./

# Install dependencies and Angular CLI globally
RUN yarn install && \
    yarn global add @angular/cli

# Copy the rest of the application
COPY . .

# Expose port 8080
EXPOSE 8080

# Start development server
CMD ["yarn", "start"]
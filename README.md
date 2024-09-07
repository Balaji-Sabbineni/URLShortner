# URL Shortener Service

This repository contains the Docker image for a URL Shortener service. The service is built using Node.js and MongoDB, and it allows users to shorten long URLs and redirect to the original URLs using the shortened links.

## Features

- URL Shortening: Generate short URLs for long web addresses.
- Redirection: Redirect users to the original URL when they visit the short URL.

## Running the Service
Clone the Repository:
```sh
git clone https://github.com/Balaji-Sabbineni/URLShortner.git
```
then change the working directory to the cloned directory
```sh
cd urlshortner
```

Build and Run the Containers in detached mode:
```sh
docker compose up -d
```

Access the Service:

- The API will be available at http://localhost:3000/url/
- MongoDB will be accessible at localhost:2717.
#
Environment Variables

MONGOURL: The MongoDB connection string. Example: mongodb://mongo:27017/short-url.

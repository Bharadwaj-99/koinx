
# Crypto Trades API

This project provides a simple API to upload cryptocurrency trades via CSV files and calculate balances based on the uploaded data.

## Table of Contents

-   [API Endpoints](#api-endpoints)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)

## API Endpoints

### 1. Upload Trades CSV

-   **Endpoint**: `/api/upload`
-   **Method**: `POST`
-   **Description**: Uploads a CSV file containing cryptocurrency trade data.
-   **Headers**:
    -   `Content-Type: multipart/form-data`
-   **Body**:
    -   `file`: The CSV file containing trades.
-   **Response**:
    -   `200 OK`: If the CSV file is successfully processed.
    -   `400 Bad Request`: If no file is uploaded or an invalid file is provided.
    -   `500 Internal Server Error`: If there is an error during processing.

### 2. Get Balance

-   **Endpoint**: `/api/balance`
-   **Method**: `POST`
-   **Description**: Retrieves the balance of all cryptocurrencies up to a given timestamp.
-   **Headers**:
    -   `Content-Type: application/json`
-   **Body**:
    -   `timestamp`: The timestamp to calculate balances up to (in ISO 8601 format).
-   **Response**:
    -   `200 OK`: A JSON object representing balances for each cryptocurrency.
    -   `400 Bad Request`: If the timestamp is not provided.
    -   `500 Internal Server Error`: If there is an error during calculation.

## Features

-   Upload CSV files containing trade data.
-   Calculate cryptocurrency balances based on trade history up to a specified timestamp.
-   Handles large files with robust error handling.

## Technologies Used

-   **Node.js**
-   **Express.js**
-   **Multer** for handling file uploads
-   **CSV-Parser** for parsing CSV files
-   **Mongoose** for MongoDB interaction
-   **MongoDB** as the database

## Installation

To run this project locally, follow these steps:

1.  **Clone the repository**:
    
    
    git clone https://github.com/Bharadwaj-99/koinx
    cd task1 
    
2.  **Install dependencies**:
    
 
    
    `npm install` 
    

    
3.  **Start the server**:
    

    
    `npm start` 
    
    The server will start on `http://localhost:3000`.
    

## Usage

### Uploading a CSV File

Use the `/api/upload` endpoint to upload a CSV file containing your trade data. The CSV file should have the following columns:

-   `User_ID`
-   `UTC_Time`
-   `Operation` (buy/sell)
-   `Market` (e.g., BTC/USD)
-   `Buy/Sell Amount`
-   `Price`

### Calculating Balances

Post a timestamp to the `/api/balance` endpoint to retrieve the balance of all cryptocurrencies up to that point in time.




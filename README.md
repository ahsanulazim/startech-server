# Startech Server

This is the backend server for the Startech clone web application, designed to handle data management, authentication, and business logic for the e-commerce platform.

## Technologies Used

The project is built using the following technologies:

- **Runtime Environment**: Node.js
- **Framework**: Express.js (v5)
- **Database**: 
  - MongoDB (Primary Database)
  - Firebase Admin SDK (Authentication & Integrity)
- **Middleware**:
  - `cors`: Cross-Origin Resource Sharing
  - `cookie-parser`: Parse Cookie header handling
  - `body-parser`: Parse incoming request bodies
  - `dotenv`: Environment variable management

## Project Features & API Routes

The server is designed to support the following key management modules:

### 1. User Management (`/users`)
- **Current Status**: Implemented
- **Features**: 
  - Create new users
  - Retrieve user details by Email or Phone
  - Update user information

### 2. Team Management
- **Purpose**: Manage administrative access, team roles, and permissions within the system.

### 3. Product Management
- **Purpose**: Full CRUD operations for the product catalog, including inventory tracking, pricing, and specifications.

### 4. Sales Management
- **Purpose**: Track customer orders, sales history, and revenue generation.

### 5. Payment Gateway
- **Purpose**: Secure handling of payment transactions and integration with payment providers.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB connection URI
- Firebase Service Account credentials

### Installation

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   
   # Firebase Configuration
   TYPE=service_account
   PROJECT_ID=your_project_id
   PRIVATE_KEY_ID=your_private_key_id
   PRIVATE_KEY=your_private_key
   CLIENT_EMAIL=your_client_email
   CLIENT_ID=your_client_id
   AUTH_URI=https://accounts.google.com/o/oauth2/auth
   TOKEN_URI=https://oauth2.googleapis.com/token
   AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
   CLIENT_X509_CERT_URL=your_client_cert_url
   UNIVERSE_DOMAIN=googleapis.com
   ```

### Running the Server

To start the server:

```bash
node server.js
```

The server will run on `http://localhost:5000` (or your defined PORT).

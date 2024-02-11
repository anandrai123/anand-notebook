# MERN Stack Anand-Notepad Application

## Overview:
This project is a simple notepad application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to register, login, and manage daily updates in a secure and user-friendly manner.

## Features:
- User authentication with bcrypt.js for password hashing and JWT for session management.
- MongoDB database for storing user data and notepad entries.
- Express.js server for handling HTTP requests and routing.
- React frontend for providing an interactive user interface.
- Daily update notepad with CRUD operations (Create, Read, Update, Delete) functionality.
- Implementation of salt & pepper concept for enhanced password security.

## Technologies Used:
- MongoDB
- Express.js
- React
- Node.js
- bcrypt.js (for password hashing)
- JWT (JSON Web Tokens)
- React Router (for frontend routing)

## Implementation Details:
1. **User Authentication**: Implement registration, login, and logout functionalities using bcrypt.js for password hashing and JWT for session management.

2. **MongoDB Setup**: Set up MongoDB to store user data and notepad entries. Define schemas for users and notepad entries.

3. **Express.js Server**: Create an Express.js server to handle HTTP requests and responses. Define API routes for user authentication and notepad CRUD operations.

4. **React Frontend**: Build a React frontend with components for user authentication and notepad management. Implement routing using React Router.

5. **Daily Update Notepad**: Implement a notepad feature where users can make daily updates. Display the latest updates on the home screen. Allow users to edit existing notepad details or delete them.

6. **Higher Privacy with Salt & Pepper**: Use bcrypt.js to hash passwords with a combination of salt and pepper for enhanced security. Store the pepper securely and separate from the database.

## Usage:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and configure the connection in the server code.
4. Start the server using `npm start` and the client using `npm start` in separate terminal windows.
5. Access the application in your browser at the specified URL.

## Contributions:
Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.



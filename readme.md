# 🔐 JWT-Based Authentication API

This project demonstrates a secure **JWT-based authentication** system using **Node.js**, **Express**, and **bcrypt.js**. It includes user registration, login, and protected routes using JSON Web Tokens.

---

## 📘 Assignment Name

**Assignment:** Implement JWT-Based Authentication in REST API  
**Objective:** Secure RESTful API endpoints with JSON Web Token (JWT) authentication.

---

## 📂 Project Structure

jwt-auth-api
├── server.js # Main server entry point
├── .env # Environment variables
├── middleware/
│ └── auth.js # Middleware for token verification
├── routes/
│ └── auth.js # Registration and login routes
├── package.json
└── README.md


---

## ⚙️ .env File Content

Create a `.env` file in the root directory and add:

```env
JWT_SECRET=supersecretkey123
PORT=5000

🔧 Installation & Setup
1.Clone the Repository
git clone https://github.com/Dibyadarshi-Mohanty/Node_Week7

2.Install Dependencies
npm install

3.Run the Server
node server.js

🚀 API Endpoints
➤ Register
POST /api/auth/register

Request Body:
{
  "email": "test@example.com",
  "password": "mypassword"
}


➤ Login
POST /api/auth/login

Request Body:
{
  "email": "test@example.com",
  "password": "mypassword"
}
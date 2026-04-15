# 🎬 movieQ

A simple movie ticket booking backend application built with Node.js, Express, and PostgreSQL.

## 🚀 Features

* User Registration
* User Login (JWT-based Authentication)
* Protected Routes (only accessible by authenticated users)
* Seat Booking System for movies
* Concurrency-safe booking using database transactions

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone url
cd movieQ
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment

Make sure you have the following installed:

* Node.js
* PostgreSQL

Update your PostgreSQL credentials inside:

```
index.mjs
```

Example:

```js
const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "sql_class_2_db",
});
```

---

### 5. Run the server

```bash
node index.mjs
```

Server will start on:

```
http://localhost:8080
```

---

## 🔐 Authentication Flow

* User registers via `/api/auth/register`
* User logs in via `/api/auth/login`
* On login, a JWT token is returned
* This token must be sent in headers for protected routes:

```
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user          |

---

### Seat Routes

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| GET    | /seats     | Get all seats           |
| PUT    | /:id/:name | Book a seat (Protected) |

---

## 🎟️ Booking Flow

1. User logs in and receives a JWT token
2. User sends a booking request:

   ```
   PUT /:id/:name
   ```
3. Token must be included in headers
4. Backend:

   * Checks if seat is available
   * Locks the row using `FOR UPDATE`
   * Updates booking safely using transactions

---

## ⚠️ Notes

* Only authenticated users can book seats
* Seat booking is concurrency-safe (prevents double booking)
* Ensure PostgreSQL is running before starting the server

---

---

## 👨‍💻 Author

Rishabh Kumar

---

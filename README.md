# Notes App with Tagging

## Overview

This project is a full-stack Notes Application that allows users to:

* Create notes
* Add tags to notes
* Store notes in a database
* View all notes
* Search notes by tag

The application consists of a React frontend and a Spring Boot backend communicating through REST APIs.

---

## Technology Stack

### Frontend

* React.js
* Vite
* Axios
* JavaScript
* CSS

### Backend

* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* MySQL

### Database

* MySQL

### Development Tools

* IntelliJ IDEA (Backend)
* Visual Studio Code (Frontend)
* Postman (API Testing)
* Git & GitHub

---

## Project Structure

### Backend

```text
backend/
├── controller/
├── service/
├── repository/
├── entity/
├── Application.java
└── application.properties
```

### Frontend

```text
frontend/
├── src/
│   ├── api/
│   │   └── notesApi.js
│   ├── components/
│   │   ├── CreateNote.jsx
│   │   ├── SearchBar.jsx
│   │   └── NotesList.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## Setup and Run Instructions

### Prerequisites

* Java 17+ (or the version used in your project)
* Maven or Gradle
* MySQL
* Node.js
* npm

---

## Backend Setup

### 1. Configure Database

Create a MySQL database:

```sql
CREATE DATABASE notesdb;
```

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/notesdb
spring.datasource.username=<your_username>
spring.datasource.password=<your_password>

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 2. Run Backend

Using IntelliJ:

* Open the backend project.
* Run the Spring Boot application.

Or using Maven:

```bash
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

## Frontend Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Available APIs

### Create Note

```http
POST /api/notes
```

Request Body:

```json
{
  "title": "Spring Boot Notes",
  "content": "Introduction to Spring Boot",
  "tags": "java,spring"
}
```

---

### Get All Notes

```http
GET /api/notes
```

---

### Search Notes By Tag

```http
GET /api/notes/search?tag=java
```

---

## Assumptions Made During Development

1. Tags are stored as a comma-separated string rather than a separate table or array structure.
2. Search functionality performs tag matching based on the stored tag string.
3. Authentication and authorization were not included as they were outside the scope of the case study.
4. Notes contain only three fields:

   * Title
   * Content
   * Tags
5. The application is intended for local development and demonstration purposes.

---

## Future Improvements

* Store tags as a list instead of a comma-separated string.
* Implement update and delete note functionality.
* Add user authentication and authorization.
* Improve UI using Tailwind CSS or a component library.
* Deploy frontend and backend to cloud platforms.

---

## Author

Anshu Raj Jaiswal

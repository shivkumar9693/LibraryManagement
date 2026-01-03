# 📚 Library Management System

A modern, full-stack library management application built with **React** (Frontend) and **Spring Boot** (Backend). This system allows authors (admins) to publish and manage books, while readers (users) can browse and read them.

## ✨ Features

- 🔐 **Authentication & Authorization**: Role-based access control (ADMIN/USER)
- 📖 **Book Management**: Admins can add, edit, and delete books
- 👀 **Book Browsing**: Users can view all available books
- 🎨 **Modern UI**: Beautiful, responsive design with animations
- ✍️ **Pen Cursor**: Unique pen emoji cursor throughout the app
- 🚀 **Smooth Animations**: Framer Motion animations for better UX

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Routing
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **Styled Components** - Styling
- **CSS3** - Modern styling with gradients and animations

### Backend
- **Spring Boot 4.0.1** - Java framework
- **Spring Security** - Authentication & Authorization
- **Spring Data JPA** - Database operations
- **MySQL** - Database
- **Maven** - Dependency management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java 17** or higher
- **Node.js** (v14 or higher) and **npm**
- **MySQL** (v8.0 or higher)
- **Maven** (for backend)

## 🚀 Getting Started

### 1. Database Setup

1. Create a MySQL database:
```sql
CREATE DATABASE library_db;
```

2. Update database credentials in `backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/library_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 2. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Run the Spring Boot application:
```bash
# Using Maven Wrapper (Windows)
mvnw.cmd spring-boot:run

# Using Maven Wrapper (Linux/Mac)
./mvnw spring-boot:run

# Or using Maven directly
mvn spring-boot:run
```

The backend will start on **http://localhost:8080**

### 3. Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

4. Start the development server:
```bash
npm start
```

The frontend will start on **http://localhost:3000**

## 📁 Project Structure

```
LibraryManagement-main/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/Main/LibraryManagement/
│   │       │       ├── config/          # Security configuration
│   │       │       ├── controller/       # REST controllers
│   │       │       ├── dto/              # Data Transfer Objects
│   │       │       ├── entity/           # JPA entities
│   │       │       ├── repository/       # Data repositories
│   │       │       └── service/          # Business logic
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── frontend/
    ├── src/
    │   ├── api/              # API service functions
    │   ├── components/        # Reusable components
    │   ├── context/           # React context (Auth)
    │   ├── pages/             # Page components
    │   │   ├── admin/         # Admin pages
    │   │   ├── auth/          # Authentication pages
    │   │   └── user/          # User pages
    │   ├── App.js             # Main app component
    │   └── index.js           # Entry point
    ├── public/
    └── package.json
```

## 🔑 Authentication Flow

1. **Signup**: Users can create an account with role (USER or ADMIN)
2. **Login**: Users authenticate with email and password
3. **Token Storage**: Basic Auth token stored in localStorage
4. **Protected Routes**: Routes are protected based on user role
5. **Auto-redirect**: Unauthenticated users are redirected to login

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Login user

### Books (Protected - Basic Auth Required)
- `GET /api/books` - Get all books (USER/ADMIN)
- `GET /api/books/{bookId}` - Get single book (USER/ADMIN)
- `GET /api/books/admin/{adminId}` - Get admin's books (ADMIN only)
- `POST /api/books/add/{adminId}` - Add new book (ADMIN only)
- `PUT /api/books/edit/{bookId}/{adminId}` - Edit book (ADMIN only)
- `DELETE /api/books/delete/{bookId}/{adminId}` - Delete book (ADMIN only)

## 🎨 User Roles

### ADMIN (Author)
- Can add, edit, and delete books
- Can view all books
- Access to admin dashboard
- Can view their own books list

### USER (Reader)
- Can view all books
- Can read book details
- Cannot modify books
 
## 🎨 UI Features

- **Pen Cursor**: Unique ✍️ emoji cursor throughout the app
- **Gradient Backgrounds**: Modern gradient color schemes
- **Smooth Animations**: Framer Motion for page transitions
- **Responsive Design**: Works on desktop and mobile
- **Loading States**: Animated spinners during data fetching
- **Empty States**: Friendly messages when no data available

## 📝 Default Routes

| Route | Access | Description |
|------|--------|-------------|
| `/` | Public | Home page with login/signup options |
| `/login` | Public | Login page |
| `/signup` | Public | Signup page |
| `/dashboard` | USER | User dashboard (book list) |
| `/books/:id` | USER | Book details page |
| `/admin` | ADMIN | Admin dashboard |
| `/admin/books` | ADMIN | Admin's book list |
| `/admin/add` | ADMIN | Add new book |
| `/admin/edit/:id` | ADMIN | Edit book |

## 🔒 Security

- **Spring Security**: Basic Authentication for API endpoints
- **Password Encryption**: BCrypt password hashing
- **Role-based Access**: Routes protected by user role
- **Token Storage**: Auth tokens stored in localStorage
- **CORS**: Configured for frontend-backend communication
 

### Code Style

- **Backend**: Follow Spring Boot conventions
- **Frontend**: Use functional components with hooks
- **Styling**: Use inline styles or styled-components for components




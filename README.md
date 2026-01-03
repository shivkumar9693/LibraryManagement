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

## 🐛 Troubleshooting

### Why Login/Signup Pages Don't Show on localhost:3000?

**Problem**: When you visit `http://localhost:3000`, you might not see the login/signup page.

**Solution**: The root path (`/`) now shows the **Home page** (landing page) with login/signup buttons. Here's the routing structure:

- `/` - **Public Home Page** (landing page with login/signup buttons) ✅
- `/login` - Login page ✅
- `/signup` - Signup page ✅
- `/dashboard` - User dashboard (protected, requires login)
- `/admin` - Admin dashboard (protected, requires login)

**How to access login/signup:**
1. **Option 1**: Visit `http://localhost:3000` - You'll see the home page with "Login" and "Sign Up" buttons
2. **Option 2**: Navigate directly to `http://localhost:3000/login` or `http://localhost:3000/signup`
3. **Option 3**: Click the "Login" or "Signup" links in the navigation header

**Why this design?**
- The home page (`/`) is now a public landing page that welcomes users
- It provides a better first impression and guides users to login/signup
- Protected routes (like `/dashboard`) automatically redirect to `/login` if user is not authenticated

### Common Issues

1. **Backend not running**
   - Ensure Spring Boot is running on port 8080
   - Check console for errors

2. **Database connection error**
   - Verify MySQL is running
   - Check database credentials in `application.properties`
   - Ensure database `library_db` exists

3. **CORS errors**
   - Backend has `@CrossOrigin` enabled
   - Ensure frontend `.env` has correct `REACT_APP_API_BASE_URL`

4. **Port already in use**
   - Backend: Change port in `application.properties` (`server.port=8081`)
   - Frontend: React will prompt to use another port

5. **Module not found errors**
   - Run `npm install` in frontend directory
   - Clear node_modules and reinstall if needed

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

## 🚀 Deployment

### Backend
1. Build JAR file: `mvn clean package`
2. Run JAR: `java -jar target/LibraryManagement-0.0.1-SNAPSHOT.jar`
3. Update `application.properties` for production database

### Frontend
1. Build for production: `npm run build`
2. Serve `build` folder with a web server (nginx, Apache, etc.)
3. Update `.env` with production API URL

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Development

### Adding New Features

1. **Backend**: Add controllers, services, and repositories in respective packages
2. **Frontend**: Add components in `pages/` and update routes in `App.js`
3. **API**: Add API functions in `frontend/src/api/`

### Code Style

- **Backend**: Follow Spring Boot conventions
- **Frontend**: Use functional components with hooks
- **Styling**: Use inline styles or styled-components for components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues or questions, please check:
- Console logs for errors
- Network tab in browser DevTools
- Backend console output

---

**Happy Reading! 📖✨**


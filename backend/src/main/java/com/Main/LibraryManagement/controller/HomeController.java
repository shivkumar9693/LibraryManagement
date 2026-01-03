package com.Main.LibraryManagement.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
public class HomeController {

    @GetMapping("/")
    public Map<String, Object> home() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Library Management API Server");
        response.put("status", "running");
        response.put("version", "1.0.0");
        response.put("endpoints", Map.of(
            "auth", "/api/auth",
            "books", "/api/books",
            "login", "POST /api/auth/login",
            "signup", "POST /api/auth/signup",
            "getAllBooks", "GET /api/books",
            "getBook", "GET /api/books/{id}",
            "addBook", "POST /api/books/add/{adminId} (ADMIN only)",
            "editBook", "PUT /api/books/edit/{bookId}/{adminId} (ADMIN only)",
            "deleteBook", "DELETE /api/books/delete/{bookId}/{adminId} (ADMIN only)"
        ));
        response.put("frontend", "Access the React frontend at http://localhost:3000");
        response.put("note", "This is the API server. The frontend runs separately on port 3000.");
        return response;
    }

    @GetMapping("/api")
    public Map<String, String> apiInfo() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Library Management API");
        response.put("baseUrl", "/api");
        response.put("auth", "/api/auth");
        response.put("books", "/api/books");
        return response;
    }
}


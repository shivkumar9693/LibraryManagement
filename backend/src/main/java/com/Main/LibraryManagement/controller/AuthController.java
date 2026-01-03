package com.Main.LibraryManagement.controller;
import com.Main.LibraryManagement.dto.LoginRequest;
import com.Main.LibraryManagement.dto.LoginResponse;
import com.Main.LibraryManagement.dto.SignupRequest;
import com.Main.LibraryManagement.entity.User;
import com.Main.LibraryManagement.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public User signup(@RequestBody SignupRequest request) {
        return authService.signup(request);
    }
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}


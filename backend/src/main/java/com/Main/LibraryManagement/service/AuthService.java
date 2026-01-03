package com.Main.LibraryManagement.service;

import com.Main.LibraryManagement.dto.LoginRequest;
import com.Main.LibraryManagement.dto.LoginResponse;
import com.Main.LibraryManagement.dto.SignupRequest;
import com.Main.LibraryManagement.entity.User;
import com.Main.LibraryManagement.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(SignupRequest request) {
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setRole(request.getRole());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return userRepository.save(user);
    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            return new LoginResponse(false, "Email not registered", null, null);
        }

        // Compare hashed password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new LoginResponse(false, "Invalid password", null, null);
        }

        return new LoginResponse(true, "Login successful", user.getRole(), user.getId());
    }

}

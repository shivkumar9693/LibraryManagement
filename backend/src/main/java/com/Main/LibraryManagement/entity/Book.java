package com.Main.LibraryManagement.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;
//
//    private String image;
@Column(columnDefinition = "TEXT")
private String image;


    // Each book belongs to an admin
    @ManyToOne
    @JoinColumn(name = "admin_id")
    @JsonIgnoreProperties({"password", "email", "role"})
    private User admin;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public User getAdmin() { return admin; }
    public void setAdmin(User admin) { this.admin = admin; }
}

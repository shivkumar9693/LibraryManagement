package com.Main.LibraryManagement.repository;

import com.Main.LibraryManagement.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAdminId(Long adminId); // fetch books for a specific admin
}

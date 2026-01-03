package com.Main.LibraryManagement.service;

import com.Main.LibraryManagement.entity.Book;
import com.Main.LibraryManagement.entity.User;
import com.Main.LibraryManagement.repository.BookRepository;
import com.Main.LibraryManagement.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final UserRepository userRepository;

    public BookService(BookRepository bookRepository, UserRepository userRepository) {
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    // Admin adds book
    public Book addBook(Long adminId, Book book) {
        User admin = userRepository.findById(adminId)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
        book.setAdmin(admin);
        return bookRepository.save(book);
    }

    // Admin edits book
    public Book editBook(Long bookId, Long adminId, Book updatedBook) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (!book.getAdmin().getId().equals(adminId)) {
            throw new RuntimeException("Unauthorized to edit this book");
        }

        book.setTitle(updatedBook.getTitle());
        book.setDescription(updatedBook.getDescription());
        book.setImage(updatedBook.getImage());
        return bookRepository.save(book);
    }

    // Admin deletes book
    public void deleteBook(Long bookId, Long adminId) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (!book.getAdmin().getId().equals(adminId)) {
            throw new RuntimeException("Unauthorized to delete this book");
        }

        bookRepository.delete(book);
    }

    // All users fetch books
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    // Admin fetch their own books
    public List<Book> getBooksByAdmin(Long adminId) {
        return bookRepository.findByAdminId(adminId);
    }

    // Fetch single book
    public Optional<Book> getBookById(Long bookId) {
        return bookRepository.findById(bookId);
    }
}

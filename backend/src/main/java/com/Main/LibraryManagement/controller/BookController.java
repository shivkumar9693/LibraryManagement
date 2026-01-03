package com.Main.LibraryManagement.controller;

import com.Main.LibraryManagement.entity.Book;
import com.Main.LibraryManagement.service.BookService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // Admin adds book
    @PostMapping("/add/{adminId}")
    public Book addBook(@PathVariable Long adminId, @RequestBody Book book) {
        return bookService.addBook(adminId, book);
    }

    // Admin edits book
    @PutMapping("/edit/{bookId}/{adminId}")
    public Book editBook(@PathVariable Long bookId, @PathVariable Long adminId, @RequestBody Book book) {
        return bookService.editBook(bookId, adminId, book);
    }

    // Admin deletes book
    @DeleteMapping("/delete/{bookId}/{adminId}")
    public String deleteBook(@PathVariable Long bookId, @PathVariable Long adminId) {
        bookService.deleteBook(bookId, adminId);
        return "Book deleted successfully";
    }

    // All users can fetch all books
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    // Fetch single book by id
    @GetMapping("/{bookId}")
    public Book getBook(@PathVariable Long bookId) {
        return bookService.getBookById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));
    }

    // Admin fetch their own books
    @GetMapping("/admin/{adminId}")
    public List<Book> getAdminBooks(@PathVariable Long adminId) {
        return bookService.getBooksByAdmin(adminId);
    }
}

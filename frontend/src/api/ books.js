import API from "./auth";

/**
 * Helper function to create Basic Auth header
 */
const getAuthHeader = (email, password) => {
    return {
        auth: {
            username: email,
            password: password,
        },
    };
};

/* =======================
   ADMIN APIs
   ======================= */

/**
 * Add book (ADMIN)
 * POST /api/books/add/{adminId}
 */
export const addBook = async (adminId, bookData, email, password) => {
    const response = await API.post(
        `/api/books/add/${adminId}`,
        bookData,
        getAuthHeader(email, password)
    );
    return response.data;
};

/**
 * Edit book (ADMIN)
 * PUT /api/books/edit/{bookId}/{adminId}
 */
export const editBook = async (bookId, adminId, bookData, email, password) => {
    const response = await API.put(
        `/api/books/edit/${bookId}/${adminId}`,
        bookData,
        getAuthHeader(email, password)
    );
    return response.data;
};

/**
 * Delete book (ADMIN)
 * DELETE /api/books/delete/{bookId}/{adminId}
 */
export const deleteBook = async (bookId, adminId, email, password) => {
    const response = await API.delete(
        `/api/books/delete/${bookId}/${adminId}`,
        getAuthHeader(email, password)
    );
    return response.data;
};

/**
 * Fetch books added by admin
 * GET /api/books/admin/{adminId}
 */
export const getAdminBooks = async (adminId, email, password) => {
    const response = await API.get(
        `/api/books/admin/${adminId}`,
        getAuthHeader(email, password)
    );
    return response.data;
};

/* =======================
   USER APIs
   ======================= */

/**
 * Fetch all books (USER + ADMIN)
 * GET /api/books
 */
export const getAllBooks = async (email, password) => {
    const response = await API.get(
        "/api/books",
        getAuthHeader(email, password)
    );
    return response.data;
};

/**
 * Fetch single book
 * GET /api/books/{bookId}
 */
export const getBookById = async (bookId, email, password) => {
    const response = await API.get(
        `/api/books/${bookId}`,
        getAuthHeader(email, password)
    );
    return response.data;
};

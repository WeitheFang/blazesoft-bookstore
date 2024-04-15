export const bookActionTypes = {
  AddBook: "AddBook",
  UpdateBook: "UpdateBook",
  DeleteBook: "DeleteBook",
};

export const addBook = (book) => ({
  type: bookActionTypes.AddBook,
  payload: book,
});

export const updateBook = (book) => ({
  type: bookActionTypes.UpdateBook,
  payload: book,
});

export const deleteBook = (bookId) => ({
  type: bookActionTypes.DeleteBook,
  payload: bookId,
});

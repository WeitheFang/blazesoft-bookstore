import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, addBook, updateBook } from "../actions/book/bookAction";
import DeleteBookDialog from "./deleteBookDialog";
import AddBookDialog from "./addBookDialog";
import UpdateBookDialog from "./updateBookDialog";

const MainPage = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteBook(currentBookId));
    closeDeleteDialog();
  };

  const handleIsDeleteOpen = (bookId) => {
    setIsDeleteOpen(true);
    setCurrentBookId(bookId);
  };

  const closeDeleteDialog = () => {
    setIsDeleteOpen(false);
  };

  const openAddDialog = () => {
    setIsAddOpen(true);
  };

  const closeAddDialog = () => {
    setIsAddOpen(false);
  };

  const handleAddBook = (book) => {
    dispatch(addBook(book));
    closeAddDialog();
  };

  const handleUpdateBook = (book) => {
    dispatch(updateBook(book));
    setIsUpdateOpen(false);
  };

  const openUpdateDialog = (book) => {
    setSelectedBook(book);
    setIsUpdateOpen(true);
  };
  return (
    <div>
      <Button onClick={openAddDialog}>Add Book</Button>
      <AddBookDialog
        open={isAddOpen}
        onClose={closeAddDialog}
        onSave={handleAddBook}
      />

      <DeleteBookDialog
        open={isDeleteOpen}
        onClose={closeDeleteDialog}
        onConfirm={handleDeleteBook}
      />

      <UpdateBookDialog
        open={isUpdateOpen}
        onClose={() => setIsUpdateOpen(false)}
        onSave={handleUpdateBook}
        book={selectedBook}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <Button
                  onClick={() => openUpdateDialog(book)}
                  style={{ textTransform: "none", justifyContent: "left" }}
                >
                  {book.name}
                </Button>
              </TableCell>
              <TableCell>${parseFloat(book.price).toFixed(2)}</TableCell>
              <TableCell>{book.category}</TableCell>
              <TableCell>
                <Button onClick={() => handleIsDeleteOpen(book.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MainPage;

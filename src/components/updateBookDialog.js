import React, { useState, useEffect } from "react";
import ReusableDialog from "./reusableDialog";
import { TextField } from "@mui/material";

const UpdateBookDialog = ({ open, onClose, onSave, book }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (book) {
      setName(book.name);
      setPrice(book.price);
      setCategory(book.category);
      setDescription(book.description);
    }
  }, [book]);
  const handleSave = () => {
    onSave({ ...book, name, price, category });
    onClose();
  };

  return (
    <ReusableDialog
      open={open}
      handleClose={onClose}
      title="Update Book"
      actions={[
        { text: "Cancel", onClick: onClose },
        { text: "Save", onClick: handleSave, color: "primary" },
      ]}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        margin="normal"
      />
    </ReusableDialog>
  );
};

export default UpdateBookDialog;

import React, { useState } from "react";
import ReusableDialog from "./reusableDialog";
import { TextField } from "@mui/material";

const AddBookDialog = ({ open, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    onSave({ name, price, category, description });
    onClose();
  };

  return (
    <ReusableDialog
      open={open}
      handleClose={onClose}
      title="Add New Book"
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
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
    </ReusableDialog>
  );
};

export default AddBookDialog;

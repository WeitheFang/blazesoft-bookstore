import React from "react";
import ReusableDialog from "./reusableDialog";

const DeleteBookDialog = ({ open, onClose, onConfirm }) => {
  return (
    <ReusableDialog
      open={open}
      handleClose={onClose}
      title="Confirm Deletion"
      actions={[
        { text: "Cancel", onClick: onClose, color: "primary" },
        { text: "Delete", onClick: onConfirm, color: "secondary" },
      ]}
    >
      <p>Are you sure you want to delete this book?</p>
    </ReusableDialog>
  );
};

export default DeleteBookDialog;

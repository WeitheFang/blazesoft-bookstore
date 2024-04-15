import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const ReusableDialog = ({ open, handleClose, title, children, actions }) => {
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button key={index} onClick={action.onClick} color={action.color}>
            {action.text}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default ReusableDialog;

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  OutlinedInput,
} from "@mui/material";
import PropTypes from "prop-types";

function ForgotPassword({ open, handleClose }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      await fetch("/api/send-reset-link", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      alert("Reset link sent! Check your email.");
      handleClose();
    } catch (error) {
      console.error("Failed to send reset link:", error);
    }
  };

  const handleDialogClose = (event, reason) => {
    if (reason === "backdropClick") {
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      disableEscapeKeyDown
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        sx: { backgroundColor: "#FAD6A5", borderRadius: 10 },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", fontSize: 25 }}>
        Thay đổi mật khẩu{" "}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <DialogContentText>
          Nhập địa chỉ email của tài khoản và chúng tôi sẽ gửi cho bạn liên kết
          để đặt lại mật khẩu.
        </DialogContentText>
        <OutlinedInput
          label="Email address"
          autoFocus
          required
          margin="dense"
          id="forgot-email"
          name="email"
          placeholder="your@email.com"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(error)}
          sx={{ borderRadius: 5 }}
        />
        {error && (
          <span style={{ color: "red", fontSize: "0.8rem" }}>{error}</span>
        )}
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button sx={{ borderRadius: 10 }} onClick={handleClose}>
          Hủy
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{ backgroundColor: "#E86100", color: "#fff", borderRadius: 10 }}
        >
          Tiếp tục
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default React.memo(ForgotPassword);

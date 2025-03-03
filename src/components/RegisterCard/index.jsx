import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { login } from "../../redux/features/counterSlice";

import {
  Box,
  Button,
  Card as MuiCard,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from "../CustomIcons";

const Card = (props) => (
  <MuiCard
    {...props}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      width: "100%",
      padding: 4,
      gap: 2,
      maxWidth: "450px",
      backgroundColor: "#FAD6A5",
      borderRadius: 15,
    }}
  />
);

export default function RegisterCard() {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post("/api/google-login", {
        token: credentialResponse.credential,
      });
      dispatch(login(response.data));
      console.log("Google Register thành công:", response.data);
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);
      setError("Google register failed");
    }
  };

  const handleGoogleError = () => {
    console.log("Google register failed");
    setError("Google register failed");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors = {};

    if (!formValues.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
      valid = false;
    }
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }
    if (!formValues.phone || !/^\d{10}$/.test(formValues.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      valid = false;
    }
    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }
    if (!formValues.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInputs()) return;
    console.log(formValues);
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <SitemarkIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          fontSize: "clamp(2rem, 10vw, 2.15rem)",
          alignSelf: "center",
          color: "#CD5700",
        }}
      >
        Đăng kí
      </Typography>

      {error && (
        <Typography color="error" sx={{ textAlign: "center" }}>
          {error}
        </Typography>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="fullName">Họ tên</FormLabel>
          <TextField
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
            id="fullName"
            name="fullName"
            placeholder="Nguyen Van A"
            fullWidth
            value={formValues.fullName}
            onChange={handleChange}
            InputProps={{ sx: { borderRadius: 5 } }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={Boolean(errors.email)}
            helperText={errors.email}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            fullWidth
            value={formValues.email}
            onChange={handleChange}
            InputProps={{ sx: { borderRadius: 5 } }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Số điện thoại</FormLabel>
          <TextField
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            id="phone"
            name="phone"
            placeholder="0xxxxxxxxx"
            fullWidth
            value={formValues.phone}
            onChange={handleChange}
            InputProps={{ sx: { borderRadius: 5 } }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Mật khẩu</FormLabel>
          <TextField
            error={Boolean(errors.password)}
            helperText={errors.password}
            id="password"
            type="password"
            name="password"
            placeholder="••••••"
            fullWidth
            value={formValues.password}
            onChange={handleChange}
            InputProps={{ sx: { borderRadius: 5 } }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="confirmPassword">Xác nhận mật khẩu</FormLabel>
          <TextField
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="••••••"
            fullWidth
            value={formValues.confirmPassword}
            onChange={handleChange}
            InputProps={{ sx: { borderRadius: 5 } }}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="agreeTerms"
              checked={formValues.agreeTerms}
              onChange={handleChange}
            />
          }
          label="Tôi đồng ý với các điều khoản và điều kiện"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ borderRadius: 10, backgroundColor: "#CD5700" }}
        >
          Đăng kí
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Bạn đã có tài khoản?{" "}
          <Link href="/login" variant="body2">
            Đăng nhập
          </Link>
        </Typography>
      </Box>

      <Divider>hoặc</Divider>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert("Sign up with Google")}
          startIcon={<GoogleIcon />}
          sx={{ borderRadius: 10 }}
        >
          Đăng kí với Google
        </Button>

        {/* <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            render={(renderProps) => (
              <Button
                fullWidth
                variant="outlined"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<GoogleIcon />}
                sx={{ borderRadius: 10 }}
              >
                Đăng kí với Google 
              </Button>
            )}
          />
        </GoogleOAuthProvider> */}

        {/* <Button
          fullWidth
          variant="outlined"
          onClick={() => alert("Sign up with Facebook")}
          startIcon={<FacebookIcon />}
          sx={{ borderRadius: 10 }}
        >
          Đăng kí với Facebook
        </Button> */}
      </Box>
    </Card>
  );
}

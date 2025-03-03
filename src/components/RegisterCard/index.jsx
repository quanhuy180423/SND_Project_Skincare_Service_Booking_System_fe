import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { login } from "../../redux/features/authSlice";

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
import { validateRegisterForm } from "../../utils/validators";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

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
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { valid, newErrors } = validateRegisterForm(formValues);
    setErrors(newErrors);
    if (!valid) return;

    const { agreeTerms, ...filteredFormValues } = formValues;
    console.log(filteredFormValues);
    try {
      const response = await axios.post(
        `${API_BASE_URL}register`,
        filteredFormValues
      );
      dispatch(login(response.data.data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
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
          <FormLabel htmlFor="username">Tên người dùng</FormLabel>
          <TextField
            error={Boolean(errors.username)}
            helperText={errors.username}
            id="username"
            name="username"
            placeholder="Nguyen Van A"
            fullWidth
            value={formValues.username}
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
        <FormControl error={Boolean(errors.agreeTerms)}>
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
          {errors.agreeTerms && (
            <Typography variant="body2" color="error">
              {errors.agreeTerms}
            </Typography>
          )}{" "}
        </FormControl>
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

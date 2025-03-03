import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
// import { loginSuccess } from "@/store/authSlice";
import axios from "axios";
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
import ForgotPassword from "../ForgotPassword";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from "../CustomIcons";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { login } from "../../redux/features/authSlice";
// import { store } from "@/redux/store";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../../utils/validators";

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
export default function SignInCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const handleOpenForgot = useCallback(() => setOpenForgotPassword(true), []);
  const handleCloseForgot = useCallback(() => setOpenForgotPassword(false), []);

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    console.log(API_BASE_URL);
    // console.log("Dữ liệu gửi lên:", formValues);
    event.preventDefault();
    const { valid, errors } = validateLoginForm(formValues);
    if (!valid) {
      setErrors(errors);
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}login`, formValues);
      // console.log("Dữ liệu từ API:", response.data);

      dispatch(login(response.data.data));
      navigate("/");

      // setTimeout(() => {
      //   console.log("Redux State sau khi đăng nhập:", store.getState());
      // }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post("google-login", {
        token: credentialResponse.credential,
      });
      dispatch(login(response.data));
      console.log("thành công");
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);

      setError("Google login failed");
    }
  };

  const handleGoogleError = () => {
    console.log("Google login failed");
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
          display: "flex",
          alignSelf: "center",
          color: "#CD5700",
        }}
      >
        Đăng nhập
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
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={Boolean(errors.email)}
            helperText={errors.email}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            value={formValues.email}
            onChange={handleChange}
            InputProps={{ sx: { borderRadius: 5 } }}
          />
        </FormControl>
        <FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormLabel htmlFor="password">Mật khẩu </FormLabel>
            <Link component="button" onClick={handleOpenForgot} variant="body2">
              Quên mật khẩu?
            </Link>
          </Box>
          <TextField
            error={Boolean(errors.password)}
            helperText={errors.password}
            id="password"
            type="password"
            name="password"
            placeholder="••••••"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            value={formValues.password}
            onChange={handleChange}
            InputProps={{ sx: { borderRadius: 5 } }}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Ghi nhớ tôi"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ borderRadius: 10, backgroundColor: "#CD5700" }}
        >
          Đăng nhập
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Bạn không có tài khoản?{" "}
          <Link href="/register" variant="body2">
            Đăng kí
          </Link>
        </Typography>
      </Box>
      <Divider>hoặc</Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* <GoogleOAuthProvider clientId={"YOUR_GOOGLE_CLIENT_ID"}>
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

        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert("Sign up with Google")}
          startIcon={<GoogleIcon />}
          sx={{ borderRadius: 10 }}
        >
          Đăng kí với Google
        </Button>
        {/* <Button
          fullWidth
          variant="outlined"
          onClick={() => alert("Sign in with Facebook")}
          startIcon={<FacebookIcon />}
          sx={{ borderRadius: 10 }}
        >
          Đăng nhập với Facebook
        </Button> */}
      </Box>
      <ForgotPassword
        open={openForgotPassword}
        handleClose={handleCloseForgot}
      />
    </Card>
  );
}

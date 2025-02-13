import { Form, Input, Button, Card, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./index.scss";
import { Link } from "react-router-dom";

// Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const { Title } = Typography;

const LoginPage = () => {
  const handleLogin = (values) => {
    console.log("Login values:", values);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Login Success:", result.user);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="background-animation"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Card className="login-card">
        <Title level={2} className="login-title">
          Welcome Back
        </Title>
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>

        <Divider>Or</Divider>

        <Button className="google-btn" onClick={handleGoogleLogin} block>
          <span className="google-icon">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path
                fill="#4285F4"
                d="M24 9.5c3.78 0 7.16 1.29 9.86 3.42l7.34-7.34C36.96 1.96 31.78 0 24 0 14.64 0 6.56 5.64 2.48 13.86l8.8 6.84C13.34 13.22 18.34 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.32 24.5c0-1.64-.14-3.22-.4-4.78H24v9.56h12.8c-.6 3.08-2.18 5.72-4.54 7.66l7.36 5.72c4.34-4 6.7-9.94 6.7-16.16z"
              />
              <path
                fill="#FBBC05"
                d="M10.88 28.46c-1.18-3.36-1.18-7.08 0-10.44l-8.8-6.84C.34 15.12 0 19.34 0 24s.34 8.88 1.08 12.82l8.8-6.84z"
              />
              <path
                fill="#EA4335"
                d="M24 48c6.48 0 11.88-2.14 15.84-5.82l-7.36-5.72c-2.14 1.46-4.86 2.32-8.48 2.32-5.66 0-10.66-3.72-12.72-8.88l-8.8 6.84C6.56 42.36 14.64 48 24 48z"
              />
            </svg>
          </span>
          Login with Google
        </Button>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          Not a member? <Link to="/register">Register now</Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default LoginPage;

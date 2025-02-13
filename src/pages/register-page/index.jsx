import { Form, Input, Button, Card, Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./index.scss";

const { Title } = Typography;

const RegisterPage = () => {
  const handleRegister = (values) => {
    console.log("Register values:", values);
  };

  return (
    <motion.div
      className="register-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="register-card">
        <Title level={2} className="register-title">
          Create an Account
        </Title>
        <Form layout="vertical" onFinish={handleRegister}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name!" }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

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
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please enter your phone!" }]}
          >
            <Input type="number" placeholder="Enter your phone" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default RegisterPage;

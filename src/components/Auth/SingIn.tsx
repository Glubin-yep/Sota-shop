import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import "./Auth.css";
import SignUp from "./SingUp"; // Adjust the path if necessary

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      console.log("Received values:", values);
      // Add API call here to handle sign in
    } catch (error) {
      console.error("Error during sign in:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign-In here (logic will be added later)
    console.log("Google Sign-In clicked");
  };

  const changeAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  if (isSignUp) {
    return <SignUp />;
  }

  return (
    <div className="auth-container">
      <Form name="signin" onFinish={onFinish} className="auth-form">
        <h2 className="tittle">Вхід</h2>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <div className="text-center">
          Не зареєстровані?{" "}
          <span className="link-primary" onClick={changeAuthMode}>
            Зареєструватися
          </span>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Увійти
          </Button>
        </Form.Item>
        <h2 className="tittle">Або</h2>
        <Form.Item>
          <Button
            type="primary"
            icon={<GoogleOutlined />}
            onClick={handleGoogleSignIn}
            block
          >
            Увійти за допомогою Google
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;

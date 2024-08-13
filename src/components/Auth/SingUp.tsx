import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Auth.css";
import SignIn from "./SingIn"; // Adjust the path if necessary

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false); // State to toggle between Sign Up and Sign In

  const onFinish = async (values: {
    email: string;
    password: string;
    confirm: string;
  }) => {
    setLoading(true);
    try {
      console.log("Received values:", values);
      // Add API call here to handle sign up
    } catch (error) {
      console.error("Error during sign up:", error);
    } finally {
      setLoading(false);
    }
  };

  const changeAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  if (isSignIn) {
    return <SignIn />;
  }

  return (
    <div className="auth-container">
      <Form name="signup" onFinish={onFinish} className="auth-form">
        <h2 className="title">Реєстрація</h2>
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
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Створити акаунт
          </Button>
        </Form.Item>
        <div className="text-center">
          Вже зареєстровані?{" "}
          <span className="link-primary" onClick={changeAuthMode}>
            Увійти
          </span>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;

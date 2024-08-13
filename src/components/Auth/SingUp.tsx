import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Auth.css";
import SignIn from "./SingIn"; // Adjust the path if necessary
import AuthService from "../../service/AuthService";

const SignUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false); // State to toggle between Sign Up and Sign In

  const onFinish = async (values: {
    email: string;
    password: string;
    confirm: string;
  }) => {
    setLoading(true);
    AuthService.registration(values.email, values.password)
      .then(() => {
        notification.success({
          message: "Реєстрація пройшла успішно!",
          placement: "topRight",
        });
        onClose();
      })
      .catch(() => {
        notification.error({
          message: "Реєстрацію не виконано",
          description: "Така пошта вже занята",
          placement: "topRight",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const changeAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  if (isSignIn) {
    return <SignIn onClose={onClose} />;
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

import React, { useState } from "react";
import {
  CloudOutlined,
  DesktopOutlined,
  HistoryOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
//import logo from "../../assets/logo.svg";
import "./Sider.css";
//import DashBoard from "../Content/Dashboard/Dashboard";
//import Activity from "../Content/Activity/Activity";
//import History from "../Content/History/History";
//import Profile from "../Content/Profile/Profile";
//import Logout from "../Auth/Logout/Logout";
import categoriesData from "./Category.json"; // Assuming your JSON file is named categories.json
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons

const { Sider } = Layout;

interface SliderProps {
  onChangeContent: (content: React.ReactNode) => void;
}

const Slider: React.FC<SliderProps> = ({ onChangeContent }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (contentKey: string) => {
    switch (contentKey) {
      case "1":
        //  onChangeContent(<DashBoard />);
        break;
      case "2":
        // onChangeContent(<Activity />);
        break;
      case "3":
        // onChangeContent(<History />);
        break;
      case "4":
        // onChangeContent(<Profile />);
        break;
      case "5":
        // onChangeContent(<Logout />);
        break;
      default:
        break;
    }
  };

  return (
    <Sider className="sider" theme="light">
      <Menu className="menu" defaultSelectedKeys={["1"]}>
        {categoriesData.map((category) => (
          <Menu.Item key={category.id}>
            {" "}
            <a>{category.title}</a>
          </Menu.Item>
        ))}
      </Menu>
      <div className="bottom">
        <div className="div-border-upper">
          <span className="footer-text">Ми в соціальних мережах</span>
          <div className="social-media-buttons">
            <a
              className="social-media-button"
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className="social-media-button"
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="social-media-button"
              href="https://www.twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="div-border-upper div-border-bottom">
          <span className="footer-text">Інформація про компанію</span>
          <a className="footer-text" target="_blank" rel="noopener noreferrer">
            Про нас
          </a>
          <a className="footer-text" target="_blank" rel="noopener noreferrer">
            Контакти
          </a>
          <a className="footer-text" target="_blank" rel="noopener noreferrer">
            Ремонт
          </a>
          <a className="footer-text" target="_blank" rel="noopener noreferrer">
            Умови використання сайту
          </a>
        </div>
      </div>
    </Sider>
  );
};

export default Slider;

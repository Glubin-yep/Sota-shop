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
import "./Slider.css";
//import DashBoard from "../Content/Dashboard/Dashboard";
//import Activity from "../Content/Activity/Activity";
//import History from "../Content/History/History";
//import Profile from "../Content/Profile/Profile";
//import Logout from "../Auth/Logout/Logout";
import categoriesData from "./Category.json"; // Assuming your JSON file is named categories.json

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
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo-vertical-slider">
        <img className="logo-image-slider" alt=" " />
        <span className="logo-text-slider" hidden={collapsed}>
          Sky Keep
        </span>
      </div>

      <Menu defaultSelectedKeys={["1"]}>
        {categoriesData.map((category) => (
          <Menu.Item key={category.id}>
            {" "}
            <a>{category.title}</a>
          </Menu.Item>
        ))}
      </Menu>
      <span className="footer" hidden={collapsed}>
        SkyKeep ©2023 Created by Dmytro Chyr
      </span>
    </Sider>
  );
};

export default Slider;

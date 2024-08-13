import React, { useState } from "react";
import { Layout } from "antd";
import Slider from "../Sider/Sider";
import ShopPage from "../ShopPage/ShopPage";
import "./Main.css";
import AuthWrapper from "../Wrappers/AuthWrapper";
import Header from "../Header/Header";
const { Content: AntContent } = Layout;

const Main: React.FC = () => {
  const [activeContent, setActiveContent] = useState<React.ReactNode>(
    <ShopPage />
  );

  const changeContent = (content: React.ReactNode) => {
    setActiveContent(content);
  };

  return (
    <Layout className="layout">
      <Header onChangeContent={changeContent} />
      <Slider onChangeContent={changeContent} />
      <AntContent className="content">
        <AuthWrapper>{activeContent}</AuthWrapper>
      </AntContent>
    </Layout>
  );
};

export default Main;

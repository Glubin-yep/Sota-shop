import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Slider from "../Sider/Sider";
import ShopPage from "../ShopPage/ShopPage";
import "./Main.css";
import AuthWrapper from "../Wrappers/AuthWrapper";
import Header from "../Header/Header";
const { Content: AntContent } = Layout;

const Main: React.FC = () => {
  const [activeContent, setActiveContent] = useState<React.ReactNode>();

  useEffect(() => {
    setActiveContent(<ShopPage onChangeContent={setActiveContent} />);
  }, []);

  return (
    <Layout className="layout">
      <Header onChangeContent={setActiveContent} />
      <Slider onChangeContent={setActiveContent} />
      <AntContent className="content">
        <AuthWrapper>{activeContent}</AuthWrapper>
      </AntContent>
    </Layout>
  );
};

export default Main;

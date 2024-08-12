import React, { useState, useEffect } from "react";
import { Input, Badge, Avatar, Layout } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
//import ItemsService from "../../services/ItemsService";
import "./Header.css";
import logo from "../../assets/LogoPlaceholder.png";
import ProductService from "../../service/ProductService";
import { ProductType } from "../../Types/ProductType";

const { Header } = Layout;

interface ProductData {
  id: string;
  name: string;
  category: string;
}

const MyHeader: React.FC = () => {
  const [data, setData] = useState<ProductType[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<ProductData[] | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const newData = await ProductService.getAllProductForMainPage(8);
      setData(newData);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }

  useEffect(() => {
    if (data) {
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredProducts);
    }
  }, [data, searchQuery]);

  return (
    <Header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-middle">
        <Input.Search
          className="search-bar"
          placeholder="Пошук..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          style={{ width: 400 }}
        />
        <div className="product-window">
          {isSearchFocused && filteredData && (
            <ul>
              {filteredData.map((product) => (
                <li key={product.id} className="product-window-li">
                  <a href={`/items/${product.category}/${product.id}`}>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="header-right">
        <Badge className="cart-badge">
          <a href="/cart">
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
          </a>
        </Badge>
        <Avatar size="large" icon={<UserOutlined />} className="user-avatar" />
      </div>
    </Header>
  );
};

export default MyHeader;

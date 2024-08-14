import React, { useEffect, useState } from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductService from "../../service/ProductService";

import "./CategoryPage.css";
import { ProductDetails } from "../../Types/ProductDetails";
import { CategoryUA } from "../../Types/Category.enums";
import LoadingScreen from "../Loader/Loader";
import ProductDetail from "../ProductPage/ProductPage";

interface CategoryPageProps {
  category: string;
  onChangeContent: (content: React.ReactNode) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  onChangeContent,
}) => {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await ProductService.getAllProductByCategory(
          category
        );
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const categoryName =
    CategoryUA[category as keyof typeof CategoryUA] || "Unknown Category";

  return (
    <div className={`product--section`} id={category}>
      <div className="title">
        <h1 className="title--block">
          <p className="title--text">{categoryName}</p>
          <hr className="title--line" />
        </h1>
      </div>
      <div className="cards--block--all">
        {isLoading ? (
          <LoadingScreen />
        ) : products.length > 0 ? (
          <>
            {products.map((product) => (
              <div
                className="card"
                key={product.id}
                onClick={() =>
                  onChangeContent(
                    <ProductDetail
                      id={product.id}
                      onChangeContent={onChangeContent}
                    />
                  )
                }
              >
                <img
                  src={product.photoURL}
                  className="card--photo"
                  alt={product.name}
                  loading="lazy"
                />
                <span className="card--title">{product.name}</span>
                <div className="card--rating">
                  <span className="star">★</span>
                  <span>
                    {product.rating ? product.rating.toFixed(1) : "N/A"}
                  </span>
                </div>
                <span className="card--price">{product.price} грн.</span>
                <Badge className="card--button">
                  <a href="/cart">
                    <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                  </a>
                </Badge>
              </div>
            ))}
          </>
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

import React from "react";
import "./CategorySection.css";
import { ProductType } from "../../Types/ProductType";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface CategorySectionProps {
  category: string;
  titleTop: string;
  data: ProductType[] | null;
  onCardClick: (id: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  titleTop,
  data,
  onCardClick,
}) => {
  const filteredData = data?.filter((item) => item.category === category);

  return (
    <div className={`product--section`} id={category}>
      <div className="title">
        <h1 className="title--block">
          <p className="title--text">{titleTop}</p>
          <hr className="title--line" />
        </h1>
      </div>
      <div className="cards--block">
        {filteredData && filteredData.length > 0 ? (
          <>
            {filteredData.map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={() => onCardClick(item.id)}
              >
                <img
                  src={item.photoURL}
                  className="card--photo"
                  alt={item.name}
                  loading="lazy"
                />
                <span className="card--title">{item.name}</span>
                <div className="card--rating">
                  <span className="star">★</span>
                  <span>{item.rating ? item.rating.toFixed(1) : "N/A"}</span>
                </div>
                <span className="card--price">{item.price} грн.</span>
                <Badge className="card--button">
                  <a href="/cart">
                    <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                  </a>
                </Badge>
              </div>
            ))}
            <div className="card card--view-all">
              <Link to={`/category/${category}`} className="card--href">
                <div className="view-all--content">
                  <span className="view-all--text">View All {category}</span>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategorySection;

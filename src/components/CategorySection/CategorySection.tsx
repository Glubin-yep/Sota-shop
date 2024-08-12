import type { FC } from "react";
import { Link } from "react-router-dom";
import "./CategorySection.css";
import { ProductType } from "../../Types/ProductType";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface CategorySectionProps {
  category: string;
  titleTop: string;
  data: ProductType[] | null;
}

const CategorySection: FC<CategorySectionProps> = ({
  category,
  titleTop,
  data,
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
          filteredData.map((item) => (
            <div className="card" key={item._id}>
              <Link
                to={`/items/${item.category}/${item._id}`}
                className="card--href"
              >
                <img
                  src={item.photoURL}
                  className="card--photo"
                  alt={item.name}
                  loading="lazy"
                />
                <span className="card--title">{item.name}</span>
              </Link>

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
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategorySection;

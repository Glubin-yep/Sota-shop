import React, { useEffect, useState } from "react";
import { Badge, Button, notification } from "antd";
import { ShoppingCartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "./ProductPage.css";
import ProductService from "../../service/ProductService";
import { ProductDetails } from "../../Types/ProductDetails";
import LoadingScreen from "../Loader/Loader";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import ShopPage from "../ShopPage/ShopPage";

interface ProductDetailProps {
  id: string;
  onChangeContent: (content: React.ReactNode) => void; // Додано пропс для обробки повернення на головну
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  id,
  onChangeContent,
}) => {
  const [product, setProduct] = useState<ProductDetails | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await ProductService.getProductByID(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <LoadingScreen />;
  }

  const renderLaptopDetails = () => (
    <>
      {product.laptopDetails?.CPU && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">CPU:</strong>{" "}
          {product.laptopDetails.CPU}
        </p>
      )}
      {product.laptopDetails?.RAM && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">RAM:</strong>{" "}
          {product.laptopDetails.RAM} GB
        </p>
      )}
      {product.laptopDetails?.ROM && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">ROM:</strong>{" "}
          {product.laptopDetails.ROM} GB
        </p>
      )}
      {product.laptopDetails?.video_card && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Video Card:</strong>{" "}
          {product.laptopDetails.video_card}
        </p>
      )}
      {product.laptopDetails?.VRAM && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">VRAM:</strong>{" "}
          {product.laptopDetails.VRAM} GB
        </p>
      )}
      {product.laptopDetails?.refresh_rate && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Refresh Rate:</strong>{" "}
          {product.laptopDetails.refresh_rate} Hz
        </p>
      )}
    </>
  );

  const renderComputerDetails = () => (
    <>
      {product.computerDetails?.CPU && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">CPU:</strong>{" "}
          {product.computerDetails.CPU}
        </p>
      )}
      {product.computerDetails?.RAM && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">RAM:</strong>{" "}
          {product.computerDetails.RAM} GB
        </p>
      )}
      {product.computerDetails?.ROM && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">ROM:</strong>{" "}
          {product.computerDetails.ROM} GB
        </p>
      )}
      {product.computerDetails?.video_card && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Video Card:</strong>{" "}
          {product.computerDetails.video_card}
        </p>
      )}
      {product.computerDetails?.RAM_version && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">RAM Version:</strong>{" "}
          {product.computerDetails.RAM_version}
        </p>
      )}
    </>
  );

  const renderSmartphoneDetails = () => (
    <>
      {product.smartphoneDetails?.camera && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Camera:</strong>{" "}
          {product.smartphoneDetails.camera}
        </p>
      )}
      {product.smartphoneDetails?.RAM && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">RAM:</strong>{" "}
          {product.smartphoneDetails.RAM} GB
        </p>
      )}
      {product.smartphoneDetails?.ROM && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">ROM:</strong>{" "}
          {product.smartphoneDetails.ROM} GB
        </p>
      )}
      {product.smartphoneDetails?.batteryCapacity && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">
            Battery Capacity:
          </strong>{" "}
          {product.smartphoneDetails.batteryCapacity} mAh
        </p>
      )}
      {product.smartphoneDetails?.refresh_rate && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Refresh Rate:</strong>{" "}
          {product.smartphoneDetails.refresh_rate} Hz
        </p>
      )}
      {product.smartphoneDetails?.sim_slot && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">SIM Slot:</strong>{" "}
          {product.smartphoneDetails.sim_slot}
        </p>
      )}
    </>
  );

  const renderAccessoriesDetails = () => (
    <>
      {product.accessoriesDetails?.type && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Type:</strong>{" "}
          {product.accessoriesDetails.type}
        </p>
      )}
      {product.accessoriesDetails?.compatibility && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Compatibility:</strong>{" "}
          {product.accessoriesDetails.compatibility}
        </p>
      )}
    </>
  );

  const renderSmartHomeDetails = () => (
    <>
      {product.smartHomeDetails?.type_conection && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">
            Type of Connection:
          </strong>{" "}
          {product.smartHomeDetails.type_conection}
        </p>
      )}
      {product.smartHomeDetails?.wireless_standart && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">
            Wireless Standard:
          </strong>{" "}
          {product.smartHomeDetails.wireless_standart}
        </p>
      )}
      {product.smartHomeDetails?.compatibility && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Compatibility:</strong>{" "}
          {product.smartHomeDetails.compatibility}
        </p>
      )}
    </>
  );

  const renderTVDetails = () => (
    <>
      {product.tvDetails?.screenResolution && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">
            Screen Resolution:
          </strong>{" "}
          {product.tvDetails.screenResolution}
        </p>
      )}
      {product.tvDetails?.smartTV && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Smart TV:</strong>{" "}
          {product.tvDetails.smartTV ? "Yes" : "No"}
        </p>
      )}
      {product.tvDetails?.matrix_type && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Matrix Type:</strong>{" "}
          {product.tvDetails.matrix_type}
        </p>
      )}
      {product.tvDetails?.OS && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">
            Operating System:
          </strong>{" "}
          {product.tvDetails.OS}
        </p>
      )}
    </>
  );

  const renderSoftwareDetails = () => (
    <>
      {product.softwareDetails?.term_of_the_license && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">
            Term of the License:
          </strong>{" "}
          {product.softwareDetails.term_of_the_license}
        </p>
      )}
      {product.softwareDetails?.Number_of_users && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">
            Number of Users:
          </strong>{" "}
          {product.softwareDetails.Number_of_users}
        </p>
      )}
      {product.softwareDetails?.type && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Type:</strong>{" "}
          {product.softwareDetails.type}
        </p>
      )}
    </>
  );

  const renderKitchenDetails = () => (
    <>
      {product.kitchenDetails?.origin && (
        <p className="product-detail--spec">
          <strong className="product-detail--spec-label">Origin:</strong>{" "}
          {product.kitchenDetails.origin}
        </p>
      )}
    </>
  );

  return (
    <div className="product-detail">
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() =>
          onChangeContent(<ShopPage onChangeContent={onChangeContent} />)
        }
        className="back-button"
      >
        Повернутися на головну
      </Button>
      <div className="product-detail--container">
        <img
          src={product.photoURL}
          className="product-detail--photo"
          alt={product.name}
        />
        <div className="product-detail--info">
          <h1 className="product-detail--title">{product.name}</h1>
          <div className="product-detail--rating">
            <span className="star">★</span>
            <span>{product.rating ? product.rating.toFixed(1) : "N/A"}</span>
          </div>
          <p className="product-detail--price">{product.price} грн.</p>

          {/* Displaying general description */}
          <p className="product-detail--description">Характеристики:</p>

          {/* Conditional rendering based on product type */}
          {product.category === "Laptop" && renderLaptopDetails()}
          {product.category === "Computer" && renderComputerDetails()}
          {product.category === "Smartphone" && renderSmartphoneDetails()}
          {product.category === "Accessories" && renderAccessoriesDetails()}
          {product.category === "SmartHome" && renderSmartHomeDetails()}
          {product.category === "TV" && renderTVDetails()}
          {product.category === "Software" && renderSoftwareDetails()}
          {product.category === "Kitchen" && renderKitchenDetails()}

          <Badge className="product-detail--button">
            <a
              className="product-detail--cart-link"
              onClick={() =>
                notification.info({
                  message: "Функціонал в розробці",
                  placement: "topRight",
                })
              }
            >
              <ShoppingCartOutlined style={{ fontSize: "24px" }} />
              Добавити у корзину
            </a>
          </Badge>

          <DeliveryInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

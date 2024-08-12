import { useState, useEffect } from "react";
import CategorySection from "../CategorySection/CategorySection";
import LoadingScreen from "../Loader/Loader";
import categoriesData from "../Sider/Category.json";
import ProductService from "../../service/ProductService";
import { ProductType } from "../../Types/ProductType";
import ProductPage from "../ProductPage/ProductPage";

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ProductType[] | null>(null);
  const [selectedProductID, setSelectedProductID] = useState<string | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await ProductService.getAllProductForMainPage(8);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleCardClick = (id: string) => {
    setSelectedProductID(id);
  };

  return (
    <div className="main">
      {isLoading ? (
        <LoadingScreen />
      ) : selectedProductID ? (
        <ProductPage id={selectedProductID} />
      ) : (
        <>
          {categoriesData.map((category) => (
            <CategorySection
              key={category.id}
              titleTop={category.title}
              category={category.category}
              data={data}
              onCardClick={handleCardClick}
            />
          ))}
        </>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import CategorySection from "../CategorySection/CategorySection";
import LoadingScreen from "../Loader/Loader";
import categoriesData from "../Sider/Category.json";
import ProductService from "../../service/ProductService";
import { ProductType } from "../../Types/ProductType";

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ProductType[] | null>(null);

  useEffect(() => {
    // Simulate data fetching
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await ProductService.getAllProduct(); // Replace with actual service call
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

  return (
    <div className="main">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {categoriesData.map((category) => (
            <CategorySection
              key={category.id} // Use a unique identifier for each category
              titleTop={category.title}
              category={category.category}
              data={data}
            />
          ))}
        </>
      )}
    </div>
  );
}

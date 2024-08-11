import React, { useState, useEffect } from "react";
import CategorySection from "../CategorySection/CategorySection";
import LoadingScreen from "../Loader/Loader";

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    async function fetchData() {
      //setIsLoading(true);
      //   try {
      //     const response = await ItemsService.getAllProducts(); // Replace with actual service call
      //     setData(response.data);
      //   } catch (error) {
      //     console.error("Error fetching data:", error);
      //     setData(null); // Handle error and set data to null or a fallback value
      //   } finally {
      //     setIsLoading(false);
      //   }
    }

    fetchData();
  }, []);

  return (
    <div className="main">
      {isLoading ? (
        <LoadingScreen /> // Replace with a loading spinner or component if necessary
      ) : (
        <>
          <CategorySection
            category="outerwears"
            titleTop="Верхній"
            titleBottom="одяг"
            data={data}
          />

          <CategorySection
            category="underwear"
            titleTop="Нижній"
            titleBottom="одяг"
            data={data}
          />

          <CategorySection
            category="footwear"
            titleTop="Взуття"
            titleBottom=""
            data={data}
          />

          <CategorySection
            category="accessory"
            titleTop="Аксесуари"
            titleBottom=""
            data={data}
          />
          <div className="space">
            {/* Add any additional content or components here */}
          </div>
        </>
      )}
    </div>
  );
}

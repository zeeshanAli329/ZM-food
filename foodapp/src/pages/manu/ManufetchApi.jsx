import { useState, useEffect } from "react";

function ManufetchApi() {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManu = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
        );
        const data = await res.json();
        setProducts(data.meals);
      } catch (error) {
        console.error("Error fetching Manu:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchManu();
  }, []);

  return { products };
}

export default ManufetchApi;

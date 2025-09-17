import React from "react";
import { useState, useEffect } from "react";

const FetchApi = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFoodList = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setFoodItems(data.categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  return { foodItems, loading };

};

export default FetchApi;
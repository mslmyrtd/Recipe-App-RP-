import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "4e9f05eb";
const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealTypes={meal}`;
  const getData = async () => {
    if (query !== "") {
      const result = await axios(url);
      console.log(result);
    }
  };

  return (
    <Header
      setQuery={setQuery}
      query={query}
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}
      meal={meal}
    />
  );
};

export default Home;

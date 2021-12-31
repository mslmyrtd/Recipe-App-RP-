import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "3c40ec64";
const APP_KEY = `673dbd1e56118568611f038c15123540`;

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealTypes={meal}`;
  const getData = async () => {
    if (query !== "") {
      const result = await axios(url);
    }
  };
  useEffect(() => {
    getData();
  }, []);
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

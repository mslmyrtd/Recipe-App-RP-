import axios from "axios";
import React, { useState } from "react";
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "3c40ec64";
const APP_KEY = `673dbd1e56118568611f038c15123540`;

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealTypes={meal}`;
  const getDate = async () => {
    if (query !== "") {
      const result = await axios(url);
      console.log(result);
    }
  };
  return <div>Home</div>;
};

export default Home;

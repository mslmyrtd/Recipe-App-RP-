import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyle";

export const Form = ({
  setQuery,
  query,
  getData,
  mealTypes,
  setMeal,
  meal,
}) => {
  return (
    <FormContainer>
      <FoodInput type="text" placeholder="Search" />
      <Button>Search</Button>
      <Select name="mealTypes" id="mealTypes">
        {mealTypes?.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

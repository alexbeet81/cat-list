import classes from "./Categories.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Fragment, useState } from "react";

import { useGetSearchCategories } from "../hooks/use-get-search-categories";
import { useGetCategoies } from "../hooks/use-get-categories";

const Categories = () => {
  const {
    data: categoriesData,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
    error: categoreisError,
  } = useGetCategoies();

  const [category, setCategory] = useState({ id: 1, name: "hats" });

  const {
    data: searchCategoriesData,
    isLoading: searchCategoriesIsLoading,
    isError: searchCategoriesIsError,
    error: searchCategoriesError,
  } = useGetSearchCategories();

  const selectCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  if (searchCategoriesIsLoading) return <p>Loading...</p>;
  if (categoriesIsLoading) return <p>Loading...</p>;

  console.log(searchCategoriesData);

  const selectCategories = categoriesData.map((category) => {
    const value = {
      id: category.id,
      name: category.name,
    };
    return (
      <MenuItem key={category.id} value={value} label={category.name}>
        {category.name}
      </MenuItem>
    );
  });

  return (
    <Fragment>
      <div className={classes.selectContainer}>
        <div className={classes.select}>
          <FormControl fullWidth>
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category"
              id="category"
              value={category.name}
              label="category"
              onChange={selectCategoryHandler}
            >
              {selectCategories}
            </Select>
          </FormControl>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;

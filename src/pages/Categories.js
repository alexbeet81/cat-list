import classes from "./Categories.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Fragment, useState } from "react";

import { useGetCategoies } from "../hooks/use-get-categories";

const Categories = () => {
  const {
    data: categoriesData,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
    error: categoreisError,
  } = useGetCategoies();

  const [category, setCategory] = useState("boxes");

  const selectCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  if (categoriesIsLoading) return <p>Loading...</p>;

  console.log(categoriesData);

  const selectCategories = categoriesData.map((category) => {
    return (
      <MenuItem key={category.id} value={category.name} label={category.name}>
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
              value={category}
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

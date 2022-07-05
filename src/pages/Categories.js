import classes from "./Categories.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Fragment, useEffect, useState } from "react";

import CatImageCard from "../components/CatImageCard";
import { useGetSearchCategories } from "../hooks/use-get-search-categories";
import { useGetCategoies } from "../hooks/use-get-categories";

const Categories = () => {
  const {
    data: categoriesData,
    isLoading: categoriesIsLoading,
    // isError: categoriesIsError,
    // error: categoreisError,
  } = useGetCategoies();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("hats");

  const {
    data: searchCategoriesData,
    isLoading: searchCategoriesIsLoading,
    // isError: searchCategoriesIsError,
    // error: searchCategoriesError,
    refetch: refetchSearchCategories
  } = useGetSearchCategories(category, currentPage);

  const selectCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    refetchSearchCategories();
  }, [category, refetchSearchCategories, currentPage])

  if (searchCategoriesIsLoading) return <p>Loading...</p>;
  if (categoriesIsLoading) return <p>Loading...</p>;
  
  const selectCategories = categoriesData.map((category) => {
    return (
      <MenuItem key={category.id} value={category.name} label={category.name}>
        {category.name}
      </MenuItem>
    );
  });
  
  const catImageCards = searchCategoriesData.map((imageData) => {
    return <CatImageCard key={imageData.id} imageData={imageData}/>
  })

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
      {searchCategoriesData.length < 1 && <p>No cats to see here</p>}
      <div className={classes.gridContainer}>
        <div className={classes.grid}>{catImageCards}</div>
      </div>
    </Fragment>
  );
};

export default Categories;

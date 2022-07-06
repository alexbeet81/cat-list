import classes from "./Categories.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Fragment, useEffect, useState } from "react";
import { useIsFetching } from "react-query";

import LoadingCat from "../components/UI/LoadingCat";
import PageButtons from "../components/PageButtons";
import CatImageCard from "../components/CatImageCard";
import { useGetSearchCategories } from "../hooks/use-get-search-categories";
import { useGetCategoies } from "../hooks/use-get-categories";

const Categories = () => {
  const isFetching = useIsFetching();
  const { data: categoriesData } = useGetCategoies();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("hats");

  const {
    data: searchCategoriesData,
    isLoading: searchCategoriesIsLoading,
    // isError: searchCategoriesIsError,
    // error: searchCategoriesError,
    refetch: refetchSearchCategories,
  } = useGetSearchCategories(category, currentPage);

  const selectCategoryHandler = (event) => {
    setCategory(event.target.value);
    setCurrentPage(1);
  };

  const leftClickHandler = () => {
    setCurrentPage((currentPage) => (currentPage -= 1));
  };

  const rightClickHandler = () => {
    setCurrentPage((currentPage) => (currentPage += 1));
  };

  useEffect(() => {
    refetchSearchCategories();
  }, [category, refetchSearchCategories, currentPage]);

  const selectCategories = categoriesData.map((category) => {
    return (
      <MenuItem key={category.id} value={category.name} label={category.name}>
        {category.name}
      </MenuItem>
    );
  });

  const catImageCards = searchCategoriesData.map((imageData) => {
    return <CatImageCard key={imageData.id} imageData={imageData} />;
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
      {searchCategoriesIsLoading ||
        (isFetching && (
          <div className={classes.loadingCat}>
            <LoadingCat />
          </div>
        ))}
      {searchCategoriesData.length < 1 && !searchCategoriesIsLoading && (
        <p>No cats to see here</p>
      )}
      {!isFetching && (
        <div className={classes.gridContainer}>
          <div className={classes.grid}>{catImageCards}</div>
        </div>
      )}
      <div className={classes.pageButtonsContainer}>
        <PageButtons
          leftClick={leftClickHandler}
          rightClick={rightClickHandler}
          currentPage={currentPage}
        />
      </div>
    </Fragment>
  );
};

export default Categories;

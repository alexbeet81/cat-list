import classes from "./Categories.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Fragment, useEffect, useState } from "react";
import { useIsFetching } from "react-query";

import ImageGrid from "../components/ImageGrid";
import LoadingCat from "../components/UI/LoadingCat";
import PageButtons from "../components/PageButtons";
import CatImageCard from "../components/CatImageCard";
import { useGetSearchCategories } from "../hooks/use-get-search-categories";
import { useGetCategoies } from "../hooks/use-get-categories";

const Categories = () => {
  const isFetchingSearchCategories = useIsFetching(["search_categories"]);
  const { data: categoriesData } = useGetCategoies();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("hats");

  const {
    data: searchCategoriesData,
    isLoading: searchCategoriesIsLoading,
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

  const loadingCat =
    isFetchingSearchCategories || searchCategoriesIsLoading ? (
      <div className={classes.loadingCat}>
        <LoadingCat />
      </div>
    ) : (
      ""
    );

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
      {loadingCat}
      {searchCategoriesData.length < 1 && !searchCategoriesIsLoading && (
        <p>No cats to see here</p>
      )}
      {!isFetchingSearchCategories && <ImageGrid data={searchCategoriesData} fav={false}/>}
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

import { useGetFavourites } from "../hooks/use-get-favourites";
import classes from "./MyList.module.css";
import ImageGrid from "../components/ImageGrid";
import LoadingCat from "../components/UI/LoadingCat";

const MyList = () => {
  const { data: favouritesData, isLoading: favouritesIsLoading } =
    useGetFavourites();

  if (favouritesIsLoading)
    return (
      <div className={classes.loadingContainer}>
        <LoadingCat />
      </div>
    );

  return (
    <div className={classes.container}>
      <h2>🐈 What a load of lovey cats! 🐈‍⬛</h2>
      <ImageGrid data={favouritesData} fav={true} />
    </div>
  );
};

export default MyList;

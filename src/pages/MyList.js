import { useGetFavourites } from "../hooks/use-get-favourites";
import classes from "./MyList.module.css";
import ImageGrid from "../components/ImageGrid";
import LoadingCat from "../components/UI/LoadingCat";

const MyList = () => {
  const { data: favouritesData, isLoading: favouritesIsLoading } =
    useGetFavourites();

  if (favouritesIsLoading) return <LoadingCat />;

  return <ImageGrid data={favouritesData} fav={true} />;
};

export default MyList;
